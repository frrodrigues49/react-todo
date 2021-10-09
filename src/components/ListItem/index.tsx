import * as C from './styles';
import { ItemsList } from '../../types/ItemsList'

type Props = {
    item: ItemsList,
    onChange: (id: number, done: boolean) => void
}

const ListItem = ({ item, onChange }: Props) => {
  return (
      <C.Container done={item.done}>
        <input 
          type="checkbox" 
          checked={item.done}
          onChange={e => onChange(item.id, e.target.checked)}
        />
        <label>{item.name}</label>
      </C.Container>
  )
}

export default ListItem;