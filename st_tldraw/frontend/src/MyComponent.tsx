import {
  Streamlit,
  withStreamlitConnection,
  ComponentProps,
} from "streamlit-component-lib"
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  ReactElement,
} from "react"

import { Tldraw, getSnapshot  } from 'tldraw'
import 'tldraw/tldraw.css'



function JSONGraphe({ args, disabled, theme }: ComponentProps): ReactElement {
  // Extract custom arguments passed from Python
  const { json } = args

  useEffect(() => {
    Streamlit.setFrameHeight()
  }, [theme])

const handleMount = useCallback((editor: any) => {

    // Load initial state
    if (json) {
      try {
        editor.store.loadSnapshot(json)
      } catch (e) {
        console.warn("Invalid snapshot", e)
      }
    }

    const unsubscribe = editor.store.listen(() => {
      const snapshot = getSnapshot(editor.store)

      Streamlit.setComponentValue(snapshot)
      Streamlit.setFrameHeight()
    })

    return () => unsubscribe()
  }, [json])


  return <div style={{height : 500, border : '1px red solid'}}><Tldraw onMount={handleMount}/></div>


}


export default withStreamlitConnection(JSONGraphe)
