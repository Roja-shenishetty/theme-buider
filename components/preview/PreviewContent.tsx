import { Button } from "@/components/ui/button"
import Container from "@/components/layout/Container"
import Stack from "@/components/layout/Stack"
import Grid from "@/components/layout/Grid"
import { YTForm } from "../ui/YTForm"
import Link from "next/link"

export default function PreviewContent() {
  return (
    <Container>
      <Stack>

        {/* Card */}
        <div className="bg-surface text-surface-foreground p-[var(--spacing)] rounded-[var(--radius)] shadow-sm border max-w-md">
          <p className="text-xs text-muted-foreground">
            Welcome
          </p>

         <h3
  className="
    mt-1
    font-semibold
    text-[calc(var(--font-size)*1.4)]
    leading-[calc(var(--line-height)*1.1)]
  "
>
            Your themed app ✨
          </h3>
        </div>
  <div
    className="
      bg-primary-container
      text-primary-container-foreground
      p-[var(--spacing)]
      rounded-[var(--radius)]
      shadow-[var(--elevation-1)]
    "
  >
    Highlight container (Material feel)
  </div>
        {/* Buttons */}
        <Grid>
          <Button className="w-full rounded-[var(--radius)]">
            Primary
          </Button>

          <Button variant="secondary" className="w-full rounded-[var(--radius)]">
            Secondary
          </Button>
        </Grid>

        {/* Surface */}
        <div className="bg-[var(--surface-2)] text-foreground p-[var(--spacing)] rounded-[var(--radius)] border max-w-md">
          Background surface content
        </div>
      </Stack>
      <Link href="/form">
        Go to Form
      </Link>
    </Container>
  )
}