import { Transition } from '@headlessui/react'
import React from 'react'
function PageTransition(props: { children: React.ReactNode; show: boolean }) {
  return (
    <Transition
      show={props.show}
      appear={true}
      enter="translate-y-100 transition-all ease-default"
      enterFrom="opacity-0 translate-y-100"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className="translate-y-100 transition-all ease-default"
    >
      {props.children}
    </Transition>
  )
}

export default PageTransition
