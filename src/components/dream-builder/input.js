import React, { PureComponent } from 'react'
import { TextInput, ScrollView } from 'react-native'

export default class extends PureComponent {
  constructor(props) {
    super(props)

    this.state = { height: 50 }
  }

  updateSize = height => {
    this.setState({
      height,
    })
  }

  render() {
    const { height } = this.state
    const { dreamText, updateDreamText } = this.props

    return (
      <TextInput
        style={{
          height,
          paddingBottom: 50,
          borderColor: '#fff',
          borderWidth: 1,
          color: '#fcfcfc',
          fontSize: 14,
        }}
        multiline={true}
        onChangeText={text => updateDreamText(text)}
        onContentSizeChange={e =>
          this.updateSize(e.nativeEvent.contentSize.height)}
        value={dreamText}
      />
    )
  }
}
