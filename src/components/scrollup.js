import React from "react"
import ScrollUpButton from "react-scroll-up-button"

const Scrollup = () => {
  return (
    <div>
      <ScrollUpButton
        StopPosition={0}
        ShowAtPosition={500}
        EasingType="easeOutCubic"
        AnimationDuration={1000}
        style={{
          width: 37,
          height: 37,
          borderRadius: 50,
          marginBottom: 200,
          backgroundColor: "#0A7953",
          padding: 8,
        }}
        ToggledStyle={{ right: 50 }}
      ></ScrollUpButton>
    </div>
  )
}

export default Scrollup
