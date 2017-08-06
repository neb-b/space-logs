import React, { PureComponent } from 'react'
import { TextInput, View } from 'react-native'
import styles from './styles'

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
    const { text, updateDreamText } = this.props

    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={[{ height }, styles.input]}
          multiline={true}
          defaultString="I was having a dream that..."
          onChangeText={text => updateDreamText(text)}
          onContentSizeChange={e =>
            this.updateSize(e.nativeEvent.contentSize.height)}
          value={text}
        />
      </View>
    )
  }
}
