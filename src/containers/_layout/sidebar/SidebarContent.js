import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import SidebarLink from './SidebarLink';
import { changeThemeToDark } from '../../../redux/actions/themeActions';

class SidebarContent extends PureComponent {
  changeToDark = () => {
    this.props.dispatch(changeThemeToDark());
    this.hideSidebar();
  };

  hideSidebar = () => {
    this.props.onClick();
  };

  render() {
    return (
      <div className='sidebar__content'>
        <ul className='sidebar__block'>
          <SidebarLink title='Plan Management' icon='diamond' route='/breachRX/planManagement' onClick={this.hideSidebar} />
          <SidebarLink title='Dashboard' icon='diamond' route='/breachRX/dashBoard' onClick={this.hideSidebar} />
           <SidebarLink title='Accounts' icon='diamond' route='/breachRX/accounts' onClick={this.hideSidebar} />
          <SidebarLink title='User' icon='envelope' route='/breachRX/user/tab' onClick={this.hideSidebar} />
          <SidebarLink title='User Group / Teams' icon='envelope' route='/breachRX/usergroup/tab' onClick={this.hideSidebar} />
          <SidebarLink title='Control' icon='envelope' route='/breachRX/control/tab' onClick={this.hideSidebar} />
          <SidebarLink title='Regulation' icon='envelope' route='/breachRX/regulation/tab' onClick={this.hideSidebar} />
          <SidebarLink title='Configuration' icon='envelope' route='/breachRX/configuration' onClick={this.hideSidebar} />
          <SidebarLink title='Incident Management' icon='diamond' route='/breachRX/incidentTemplate/tab' onClick={this.hideSidebar} />
          <SidebarLink title='Tasks' icon='diamond' route='/breachRX/tasks/tab' onClick={this.hideSidebar} />
          <SidebarLink title='Intel Feeds' icon='diamond' route='/breachRX/intelfeeds/tab' onClick={this.hideSidebar} />
          <SidebarLink title='Risk / Business Impact' icon='diamond' route='/breachRX/riskimpacts/tab' onClick={this.hideSidebar} />
          <SidebarLink title='Reports' icon='diamond' route='/breachRX/reports' onClick={this.hideSidebar} />
        </ul>
      </div>
    )
  }
}

export default connect()(SidebarContent);