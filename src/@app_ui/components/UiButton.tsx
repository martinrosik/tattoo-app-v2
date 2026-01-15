import { Button } from '~/src/@app_ui/shadcn/ui/button'

type Props = React.ComponentProps<typeof Button>

const UiButton = (props: Props) => <Button {...props} />

export default UiButton
