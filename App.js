/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AlertIOS
} from 'react-native';

export default class App extends Component<{}> {

  static defaultProps = {
    age:18,
    name : 'QG'
  }

/*  属性校验器  设置 defaultProps 中的属性的类型
  static propTypes = {
    autoPlay: React.PropTypes.bool.isRequired,
    maxLoops: React.PropTypes.number.isRequired,
    posterFrameSrc: React.PropTypes.string.isRequired,
    videoSrc: React.PropTypes.string.isRequired,
  };
*/

  state = {
    TextTitle : '默认的标题',
    person : '张三'
  }

  render() {
    return (
      <View ref = 'bgView' style={styles.container}>
        <TouchableOpacity
            activeOpacity={0.1}

            /* onPress = {()=>this.renderPressClikc()} */
            /* onPress = {this.renderPressClikc('点击')} */
            onPress = {()=>this.onPressClikc('点击')}
            onPressIn = {()=>this.onPressClikc('按下')}
            onPressOut = {()=>this.onPressClikc('抬起')}
            onLongPress = {()=>this.onPressClikc('长按')}
        >

          <View ref = 'clickButton' style={{backgroundColor:'red'}}>
            <Text>
               我是可以点击的
            </Text>

          </View>

        </TouchableOpacity>

        <View ref = 'textBgView'>
          <Text ref = 'texView1'>
            {this.state.TextTitle}
          </Text>
          <Text ref = 'texView2'>
            {this.state.person}
          </Text>
          <Text ref = 'texView3'>
            {this.props.age}
            {this.props.name}
          </Text>
        </View>
      </View>
    );
  }


  onPressClikc(event) {
    //console.log('我被点击了')
    //AlertIOS.alert('呵呵')
    //this.refs.bgView
    console.log('hehe');
    this.setState({
      TextTitle: event,
      person:'李四'
    })
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
