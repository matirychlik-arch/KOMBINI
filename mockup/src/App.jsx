import { useState, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import IdleScreen from './screens/IdleScreen'
import MenuScreen from './screens/MenuScreen'
import ProductHeroScreen from './screens/ProductHeroScreen'
import CustomizationScreen from './screens/CustomizationScreen'
import CartScreen from './screens/CartScreen'
import PaymentScreen from './screens/PaymentScreen'
import PreparationScreen from './screens/PreparationScreen'
import RewardScreen from './screens/RewardScreen'
import PickupScreen from './screens/PickupScreen'

const DEFAULT_CUSTOMIZATION = {
  sweetness: 'normal',
  syrup: null,
  extraEspresso: false,
}

function calcPrice(drink, customization) {
  return drink.price + (customization.extraEspresso ? 2 : 0)
}

export default function App() {
  const [screen, setScreen] = useState(0)
  const [selectedDrink, setSelectedDrink] = useState(null)
  const [customization, setCustomization] = useState(DEFAULT_CUSTOMIZATION)
  const [cart, setCart] = useState([])

  const goTo = useCallback((n) => setScreen(n), [])

  const handleSelectDrink = useCallback((drink) => {
    setSelectedDrink(drink)
    setCustomization(DEFAULT_CUSTOMIZATION)
    setScreen(2)
  }, [])

  const handleAddToCart = useCallback((custom = customization) => {
    const price = calcPrice(selectedDrink, custom)
    setCart(prev => [...prev, { drink: selectedDrink, customization: custom, price, id: Date.now() }])
    setScreen(4)
  }, [selectedDrink, customization])

  const handleReset = useCallback(() => {
    setCart([])
    setSelectedDrink(null)
    setCustomization(DEFAULT_CUSTOMIZATION)
    setScreen(0)
  }, [])

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  const ctx = {
    screen, goTo,
    selectedDrink,
    customization, setCustomization,
    cart, setCart, total,
    onSelectDrink: handleSelectDrink,
    onAddToCart: handleAddToCart,
    onReset: handleReset,
  }

  return (
    <div className="grain">
      <div className="kiosk no-select">
        <AnimatePresence mode="wait">
          {screen === 0 && <IdleScreen key="idle" {...ctx} />}
          {screen === 1 && <MenuScreen key="menu" {...ctx} />}
          {screen === 2 && <ProductHeroScreen key="hero" {...ctx} />}
          {screen === 3 && <CustomizationScreen key="custom" {...ctx} />}
          {screen === 4 && <CartScreen key="cart" {...ctx} />}
          {screen === 5 && <PaymentScreen key="payment" {...ctx} />}
          {screen === 6 && <PreparationScreen key="prep" {...ctx} />}
          {screen === 8 && <RewardScreen key="reward" {...ctx} />}
          {screen === 9 && <PickupScreen key="pickup" {...ctx} />}
        </AnimatePresence>
      </div>
    </div>
  )
}
