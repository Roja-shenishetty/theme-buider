'use client';
import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';

const LeafletMap = dynamic(
  () => import('@/components/MapComponent'),
  { ssr: false, loading: () => <div className="w-full h-full bg-gray-100 flex items-center justify-center">Loading Canvas...</div> }
);

type WorkflowStep = 'START' | 'WAITING' | 'NEIGHBOR_DRAFTING' | 'INCOMING_REQUEST' | 'IN_PROGRESS' | 'COMPLETED';
type JobType = 'grocery' | 'child_pickup' | 'ride' | 'general_errand';
type PlaceContext = 'school' | 'store' | 'office' | 'general';

export default function LinearWorkflowDashboard() {
  const [currentStep, setCurrentStep] = useState<WorkflowStep>('START');
  const [myLocation, setMyLocation] = useState('');
  const [mySprouts, setMySprouts] = useState(148);
  
  const [destinationContext, setDestinationContext] = useState<PlaceContext>('general');
  const [shortLocationName, setShortLocationName] = useState('');
  
  const [neighborDraftText, setNeighborDraftText] = useState('');
  const [neighborReward, setNeighborReward] = useState(5);

  const [activeJob, setActiveJob] = useState<{
    id: string;
    neighborName: string;
    type: JobType;
    details: string;
    reward: number;
    coords: [number, number];
  } | null>(null);

  const [mapCenter, setMapCenter] = useState<[number, number]>([47.3769, 8.5417]);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  const quickSuggestions: Record<PlaceContext, { type: JobType, text: string, reward: number }[]> = {
    store: [
      { type: 'grocery', text: 'Could you grab 2x Oat Milk while you are there?', reward: 8 },
      { type: 'grocery', text: 'I need some Advil/Tylenol if you pass the pharmacy aisle!', reward: 5 },
      { type: 'grocery', text: 'Can you pick up a loaf of sourdough bread?', reward: 6 }
    ],
    school: [
      { type: 'child_pickup', text: "Can you pick up Leo? I'm stuck in a meeting.", reward: 15 },
      { type: 'general_errand', text: "Could you drop off this forgotten lunchbox to the front desk?", reward: 8 },
      { type: 'ride', text: "Can you carpool the kids back to our street?", reward: 12 }
    ],
    office: [
      { type: 'ride', text: "Are you passing by? My car won't start, need a ride to the IT park!", reward: 20 },
      { type: 'general_errand', text: "Could you drop off this signed document on your way?", reward: 10 },
      { type: 'ride', text: "Let's carpool to the morning standup!", reward: 15 }
    ],
    general: [
      { type: 'general_errand', text: 'Could you drop off this small package for me?', reward: 5 },
      { type: 'general_errand', text: 'Can you pick up a local order under my name?', reward: 8 }
    ]
  };

  // FIXED: Explicitly maps true target addresses onto the pins for permanent display
  const getMapMarkers = () => {
    if (currentStep === 'START') return [];
    
    const labelLocation = shortLocationName || 'Selected Route Destination';
    if (currentStep === 'WAITING') {
      return [{ id: 'me', position: mapCenter, name: labelLocation, info: `Tracked via: ${myLocation}` }];
    }
    
    const neighborCoords: [number, number] = [mapCenter[0] + 0.003, mapCenter[1] - 0.002];

    if (currentStep === 'NEIGHBOR_DRAFTING') {
      return [
        { id: 'me', position: mapCenter, name: labelLocation, info: `Route target destination` },
        { id: 'neighbor', position: neighborCoords, name: 'Sarah J. (Neighbor)', info: neighborDraftText || 'Drafting live neighborhood ask...' }
      ];
    }

    if (activeJob) {
      return [
        { id: 'me', position: mapCenter, name: `Your Trip to ${labelLocation}`, info: 'Driver current loop' },
        { id: 'neighbor', position: activeJob.coords, name: 'Sarah J. (Delivery Target)', info: activeJob.details }
      ];
    }
    return [];
  };

  const handleGoLive = (e: React.FormEvent) => {
    e.preventDefault();
    if (!myLocation.trim()) return alert('Please enter your location or destination!');
    setCurrentStep('WAITING');
    
    setTimeout(() => {
      setCurrentStep('NEIGHBOR_DRAFTING');
      setNeighborDraftText('');
    }, 2000);
  };

  const handleNeighborSendRequest = () => {
    if (!neighborDraftText.trim()) return alert('Message cannot be empty');

    const baseType = destinationContext === 'school' ? 'child_pickup' : destinationContext === 'store' ? 'grocery' : 'general_errand';

    const newJob = {
      id: 'job-' + Math.floor(Math.random() * 1000),
      neighborName: 'Sarah Jenkins (0.3 mi away)',
      type: baseType as JobType,
      details: neighborDraftText, 
      reward: neighborReward,
      coords: [mapCenter[0] + 0.003, mapCenter[1] - 0.002] as [number, number]
    };

    setActiveJob(newJob);
    setCurrentStep('INCOMING_REQUEST');
  };

  const handleAcceptJob = () => {
    if (!activeJob) return;
    setCurrentStep('IN_PROGRESS');
  };

  const handleCompleteJob = () => {
    if (!activeJob) return;
    setMySprouts((prev) => prev + activeJob.reward);
    setCurrentStep('COMPLETED');
  };

  const handleResetWorkflow = () => {
    setMyLocation('');
    setShortLocationName('');
    setDestinationContext('general');
    setActiveJob(null);
    setCurrentStep('START');
    setMapCenter([47.3769, 8.5417]);
    setSuggestions([]);
  };

  const handleLocationSearch = (query: string) => {
    setMyLocation(query); 
    if (query.length < 3) {
      setSuggestions([]); return;
    }
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    
    setIsSearching(true);
    debounceTimer.current = setTimeout(async () => {
      try {
        const response = await fetch(`/api/geocode?q=${encodeURIComponent(query)}`);
        if (!response.ok) throw new Error("Server rejected the request");
        const data = await response.json();
        setSuggestions(data); 
      } catch (error) {
        setSuggestions([]); 
      } finally {
        setIsSearching(false);
      }
    }, 600); 
  };
  
  const handleSelectPlace = (place: any) => {
    setMyLocation(place.display_name);
    setShortLocationName(place.display_name.split(',')[0]);
    setMapCenter([parseFloat(place.lat), parseFloat(place.lon)]); 
    
    const pClass = place.class || '';
    const pType = place.type || '';
    
    if (pClass === 'shop' || pType === 'supermarket' || pType === 'mall' || pType === 'convenience') setDestinationContext('store');
    else if (pType === 'school' || pType === 'kindergarten' || pType === 'university') setDestinationContext('school');
    else if (pClass === 'office' || pType === 'commercial') setDestinationContext('office');
    else setDestinationContext('general');

    setSuggestions([]);
  };

  const getJobEmoji = (type: JobType) => {
    switch(type) {
      case 'grocery': return '🛒';
      case 'child_pickup': return '🎒';
      case 'ride': return '🚗';
      default: return '📦';
    }
  };

  return (
    <main className="h-screen w-screen relative overflow-hidden bg-[#f7f5f0] text-[#1c2d24] font-sans">
      
      {/* BRAND BANNER */}
      <header className="absolute top-4 left-4 right-4 z-40 flex justify-between items-center pointer-events-none">
        <div className="bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg border border-gray-100 font-serif font-bold text-xl pointer-events-auto">
          GetAlong
        </div>
        <div className="bg-[#1c2d24] text-white px-4 py-2.5 rounded-full shadow-lg flex items-center gap-2 pointer-events-auto border border-[#2d4739]">
          <span>🌱</span>
          <span className="font-mono font-bold text-sm tracking-wide">{mySprouts} Sprouts</span>
        </div>
      </header>

      {/* MAP LAYER */}
      <div className="absolute inset-0 z-0">
        <LeafletMap center={mapCenter} markers={getMapMarkers()} />
      </div>

      {/* OVERLAY CARD */}
      <div className="absolute bottom-6 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:max-w-md z-40">
        <div className="bg-white rounded-[32px] p-6 md:p-8 shadow-2xl border border-gray-100 transition-all duration-300 relative overflow-hidden">
          
          {/* ================= STEP 1: START ================= */}
          {currentStep === 'START' && (
            <form onSubmit={handleGoLive} className="space-y-4">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-emerald-700 uppercase bg-emerald-50 px-2.5 py-1 rounded-md">Step 01 / Route Plan</span>
                <h2 className="text-2xl font-serif font-bold mt-2 mb-1">Heading out somewhere?</h2>
                <p className="text-sm text-gray-500">Enter your destination. We'll alert neighbors who need help along the way.</p>
              </div>

              <div className="space-y-2 relative">
                <div className="flex justify-between items-end">
                  <label className="text-xs font-bold uppercase text-gray-400 tracking-wider">Your Location</label>
                  {destinationContext !== 'general' && myLocation && !isSearching && suggestions.length === 0 && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      {destinationContext} Route Detected
                    </span>
                  )}
                </div>
                
                <input 
                  type="text"
                  placeholder="e.g., Target, Lincoln High School..."
                  value={myLocation}
                  onChange={(e) => handleLocationSearch(e.target.value)}
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#4a7c59]"
                />

                {isSearching && <div className="absolute right-4 top-[38px] text-xs text-gray-400 animate-pulse">Searching...</div>}

                {suggestions.length > 0 && (
                  <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-2xl shadow-xl max-h-56 overflow-y-auto">
                    {suggestions.map((place) => (
                      <button
                        key={place.place_id}
                        type="button"
                        onClick={() => handleSelectPlace(place)}
                        className="w-full text-left px-4 py-3 hover:bg-[#f7f5f0] border-b border-gray-50 last:border-0 transition-colors"
                      >
                        <div className="font-bold text-sm text-gray-800 truncate">{place.display_name.split(',')[0]}</div>
                        <div className="text-xs text-gray-500 truncate mt-0.5">{place.display_name}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button type="submit" className="w-full bg-[#1c2d24] hover:bg-[#2b4235] text-white py-4 rounded-full font-bold text-sm transition">
                <span>🟢</span> Broadcast "I'm Out"
              </button>
            </form>
          )}

          {/* ================= STEP 2: WAITING ================= */}
          {currentStep === 'WAITING' && (
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center mx-auto animate-pulse">
                <span className="text-2xl">📡</span>
              </div>
              <div>
                <h2 className="text-xl font-bold mt-3 mb-1">Broadcasting Route...</h2>
                <p className="text-sm text-gray-500">Notifying neighbors near "{shortLocationName || myLocation}"</p>
              </div>
            </div>
          )}

          {/* ================= STEP 3: NEIGHBOR SIMULATION ================= */}
          {currentStep === 'NEIGHBOR_DRAFTING' && (
            <div className="space-y-4 bg-indigo-50/50 -m-6 p-6 md:-m-8 md:p-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="animate-pulse">👀</span>
                <span className="text-xs font-bold text-indigo-800 uppercase tracking-wider">Simulation: Neighbor's Screen</span>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-900 leading-tight">
                  Your neighbor is heading to <span className="text-indigo-600">{shortLocationName}</span>. Need anything?
                </h2>
              </div>

              {/* FAST SUGGESTION CHIPS */}
              <div className="flex flex-wrap gap-2 pt-1">
                {quickSuggestions[destinationContext].map((sug, idx) => (
                  <button 
                    key={idx}
                    type="button"
                    onClick={() => {
                      setNeighborDraftText(sug.text);
                      setNeighborReward(sug.reward);
                    }}
                    className="text-xs bg-white border border-indigo-100 hover:border-indigo-300 text-indigo-900 px-3 py-2 rounded-xl text-left transition shadow-sm"
                  >
                    {sug.text}
                  </button>
                ))}
              </div>

              {/* FULLY EDITABLE TEXT AREA */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Edit Request Details</label>
                <textarea 
                  value={neighborDraftText}
                  onChange={(e) => setNeighborDraftText(e.target.value)}
                  placeholder="Type your custom request here..."
                  className="w-full bg-white border border-indigo-100 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[80px]"
                />
              </div>

              <div className="flex gap-3">
                <div className="flex-1 bg-white border border-indigo-100 rounded-xl p-3 flex justify-between items-center">
                  <span className="text-xs font-bold text-gray-500">Reward Offer</span>
                  <div className="flex items-center gap-2">
                    <button type="button" onClick={() => setNeighborReward(Math.max(1, neighborReward - 1))} className="text-gray-400 hover:text-indigo-600 text-lg px-2">-</button>
                    <span className="font-mono font-bold text-indigo-700">{neighborReward} 🌱</span>
                    <button type="button" onClick={() => setNeighborReward(neighborReward + 1)} className="text-gray-400 hover:text-indigo-600 text-lg px-2">+</button>
                  </div>
                </div>
              </div>

              <button 
                type="button"
                onClick={handleNeighborSendRequest}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3.5 rounded-full font-bold text-sm tracking-wide transition shadow-md"
              >
                Send Request to Broadcaster ✈️
              </button>
            </div>
          )}

          {/* ================= STEP 4: INCOMING REQUEST ================= */}
          {currentStep === 'INCOMING_REQUEST' && activeJob && (
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md uppercase tracking-wider">⚡ Request Received!</span>
                <span className="font-mono text-sm font-bold text-[#4a7c59]">+{activeJob.reward} 🌱</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{activeJob.neighborName}</h3>
                <div className="mt-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                    {getJobEmoji(activeJob.type)} {activeJob.type.replace('_', ' ')}
                  </span>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 text-sm italic text-gray-700">
                "{activeJob.details}"
              </div>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button type="button" onClick={handleResetWorkflow} className="py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-full text-xs">Decline</button>
                <button type="button" onClick={handleAcceptJob} className="py-3.5 bg-black text-white font-bold rounded-full text-xs">Accept Task</button>
              </div>
            </div>
          )}

          {/* ================= STEP 5: IN PROGRESS ================= */}
          {currentStep === 'IN_PROGRESS' && activeJob && (
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">Step 04 / Active Task</span>
                <h2 className="text-xl font-bold mt-2 mb-1">Helping out {activeJob.neighborName.split(' ')[0]}</h2>
              </div>
              <div className="p-4 border border-blue-100 bg-blue-50/20 rounded-2xl text-xs space-y-3">
                <div className="font-bold text-blue-900">{getJobEmoji(activeJob.type)} Task Checklist</div>
                <div className="flex gap-2 text-gray-700">
                  <input type="checkbox" className="mt-0.5 rounded text-emerald-600" />
                  <span>{activeJob.details}</span>
                </div>
              </div>
              <button type="button" onClick={handleCompleteJob} className="w-full bg-[#4a7c59] hover:bg-[#3d664a] text-white py-4 rounded-full font-bold text-sm transition">
                ✅ Complete Task & Earn Sprouts
              </button>
            </div>
          )}

          {/* ================= STEP 6: COMPLETED ================= */}
          {currentStep === 'COMPLETED' && activeJob && (
            <div className="text-center py-2 space-y-5">
              <div className="text-5xl animate-bounce">🎉</div>
              <div>
                <h2 className="text-2xl font-serif font-bold">Sprouts Collected!</h2>
                <p className="text-sm text-gray-500 mt-1">You earned <span className="font-mono font-bold text-emerald-700 text-base">+{activeJob.reward}</span> sprouts.</p>
              </div>
              <button type="button" onClick={handleResetWorkflow} className="w-full bg-black text-white py-3.5 rounded-full font-bold text-sm">Finish Run</button>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}