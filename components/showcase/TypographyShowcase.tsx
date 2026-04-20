import { Typography } from "@/components/ui/typography"

export function TypographyShowcase() {
  return (
    <div className="space-y-6">

      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>

      <Typography variant="body">
        This is responsive body text that scales automatically.
      </Typography>

      <Typography variant="muted">
        Muted secondary text
      </Typography>

      <Typography variant="small">
        Helper text
      </Typography>

      <Typography variant="label">
        Label text
      </Typography>

      <Typography variant="caption">
        Caption text
      </Typography>

      <Typography variant="code">
        npm install design-system
      </Typography>

    </div>
  )
}