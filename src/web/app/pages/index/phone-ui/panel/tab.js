import React, { Component } from 'react';
import { connect } from 'react-redux';
import cls from 'classnames';
import Session from './session';
import Friends from './friends';
import actions from '../../actions';
// import sdk from '../../sdk';

@connect(
  state => ({
    switchIndex: state.getIn(['chat', 'switchIndex'])
  }),
  actions
)
export default class Tab extends Component {
  onSwitch(switchIndex) {
    this.props.changeChatField({ switchIndex });
  }

  render() {
    const { switchIndex } = this.props;
    return (
      <div>
        <Session show={switchIndex === 'chat'} />
        <Friends
          onSwitchChat={() => { this.onSwitch('chat'); }}
          show={switchIndex === 'friends'}
        />
      <div className="tab">
        <div className="tab-item" onClick={() => { this.onSwitch('chat'); }}>
          <a title="聊天">
            <i className={cls('iconfont', { 'message-empty': switchIndex === 'friends', message: switchIndex !== 'friends' })} />
          </a>
        </div>
        <div className="tab-item" onClick={() => { this.onSwitch('friends'); }}>
          <a title="通讯录">
            <i className={cls('iconfont', { 'card-empty': switchIndex === 'chat', card: switchIndex !== 'chat' })} />
          </a>
        </div>
        <div className="tab-item" onClick={() => { this.onSwitch('mine'); }}>
          <a title="我">
            <i className={cls('iconfont', { 'people': switchIndex === 'mine', people3: switchIndex !== 'mine' })} />
          </a>
        </div>
      </div>
      </div>
    );
  }
}
