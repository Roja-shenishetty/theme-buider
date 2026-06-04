import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { InputOtpShowcase } from "@/components/showcase/InputOtpShowcase"

export default function InputOtpPage() {
  return (
    <ComponentPageLayout
      title="Input OTP"
      description="Accessible, auto-advancing input slots for Two-Factor Authentication and verification codes."
      image="/images/input-otp-cover.jpg" // Update with your actual asset path
    >
      <InputOtpShowcase />
    </ComponentPageLayout>
  )
}