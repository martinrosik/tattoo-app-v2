import { Item } from '~/src/@app_ui/shadcn/ui/item'

type Props = React.ComponentProps<typeof Item>

const UiItem = (props: Props) => <Item {...props} />

export default UiItem
