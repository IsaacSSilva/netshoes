import { BannerStore } from './BannerStore'
import { CardBaseStore } from './CardBaseStore'
import { Window } from './RootWindow'

export const Store = {
  Root: Window,
  CardBase: CardBaseStore,
  Banner: BannerStore
}
