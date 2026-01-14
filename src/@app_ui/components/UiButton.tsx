import { Button } from '~/src/components/ui/button'

type Props = React.ComponentProps<typeof Button>

const UiButton = (props: Props) => <Button {...props} />

export default UiButton
