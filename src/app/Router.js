import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from '../containers/_layout';
import MainWrapper from './MainWrapper';

import LogIn from '../containers/log_in';
import ExamplePageOne from '../containers/example';
import ExamplePageTwo from '../containers/example_two';
import EditTable from '../containers/example_two/components/EditTableComponent';
import DashboardComponent from '../containers/Dashboard';
import AccountsComponent from '../containers/Accounts';
import PlanManagementComponent from '../containers/Plan_Management';
import UserComponent from '../containers/User';
import UserViewComponent from '../containers/User/components/UserViewComponent';
import UserEditComponent from '../containers/User/components/UserEditComponent';
import UserAddComponent from '../containers/User/components/UserAddComponent';
import UserGroupComponent from '../containers/User_Group';
import UserGroupViewComponent from '../containers/User_Group/components/UserGroupViewComponent';
import UserGroupEditComponent from '../containers/User_Group/components/UserGroupEditComponent';
import UserGroupAddComponent from '../containers/User_Group/components/UserGroupAddComponent';
import ControlComponent from '../containers/Control';
import ControlViewComponent from '../containers/Control/components/ControlViewComponent';
import ControlEditComponent from '../containers/Control/components/ControlEditComponent';
import ControlAddComponent from '../containers/Control/components/ControlAddComponent';
import RegulationComponent from '../containers/Regulation';
import RegulationViewComponent from '../containers/Regulation/components/RegulationViewComponent';
import RegulationEditComponent from '../containers/Regulation/components/RegulationEditComponent';
import RegulationAddComponent from '../containers/Regulation/components/RegulationAddComponent';
import IncidentTemplateComponent from '../containers/Incident_Template_Management';
import IncidentTemplateViewComponent from '../containers/Incident_Template_Management/components/IncidentTemplateViewComponent';
import IncidentTemplateEditComponent from '../containers/Incident_Template_Management/components/IncidentTemplateEditComponent';
import IncidentTemplateAddComponent from '../containers/Incident_Template_Management/components/IncidentTemplateAddComponent';
import TasksComponent from '../containers/Tasks';
import TasksViewComponent from '../containers/Tasks/components/TasksViewComponent';
import TasksEditComponent from '../containers/Tasks/components/TasksEditComponent';
import TasksAddComponent from '../containers/Tasks/components/TasksAddComponent';
import IntelFeedsComponent from '../containers/Intel_Feeds';
import IntelFeedsViewComponent from '../containers/Intel_Feeds/components/IntelFeedsViewComponent';
import IntelFeedsEditComponent from '../containers/Intel_Feeds/components/IntelFeedsEditComponent';
import IntelFeedsAddComponent from '../containers/Intel_Feeds/components/IntelFeedsAddComponent';
import RiskImpactsComponent from '../containers/Risk_Impacts';
import RiskImpactsAddComponent from '../containers/Risk_Impacts/components/RiskImpactsAddComponent';
import RiskImpactsEditComponent from '../containers/Risk_Impacts/components/RiskImpactsEditComponent';
import RiskImpactsViewComponent from '../containers/Risk_Impacts/components/RiskImpactsViewComponent';
import ConfigurationComponent from '../containers/Configuration';
import ReportsComponent from '../containers/Reports';

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path='/' component={LogIn}/>
        <Route exact path='/log_in' component={LogIn}/>
        <Route path='/' component={wrappedRoutes}/>
      </Switch>
    </main>
  </MainWrapper>
);

const wrappedRoutes = () => (
  <div>
    <Layout/>
    <div className='container__wrap'>
      <Route path='/breachRX' component={BreachRX}/>
    </div>
  </div>
);

const BreachRX = () => (
  <Switch>
    <Route path='/breachRX/dashBoard' component={DashboardComponent}/>
    <Route path='/breachRX/planManagement' component={PlanManagementComponent}/>
    <Route path='/breachRX/user' component={User}/>
    <Route path='/breachRX/usergroup' component={UserGroup}/>
    <Route path='/breachRX/control' component={Control}/>
    <Route path='/breachRX/regulation' component={Regulation}/>
    <Route path='/breachRX/configuration' component={ConfigurationComponent}/>
    <Route path='/breachRX/incidentTemplate' component={IncidentTemplate}/>
    <Route path='/breachRX/tasks' component={Tasks}/>
    <Route path='/breachRX/intelfeeds' component={IntelFeeds}/>
    <Route path='/breachRX/riskimpacts' component={RiskImpacts}/>
    <Route path='/breachRX/reports' component={ReportsComponent}/>
        <Route path='/breachRX/accounts' component={AccountsComponent}/>
  </Switch>
);
const User = () => (
  <Switch>
    <Route path='/breachRX/user/tab' component={UserComponent}/>
     <Route path='/breachRX/user/add' component={UserAddComponent}/>
    <Route path='/breachRX/user/view' component={UserViewComponent}/>
    <Route path='/breachRX/user/edit' component={UserEditComponent}/>
  </Switch>
);
const UserGroup = () => (
  <Switch>
    <Route path='/breachRX/usergroup/tab' component={UserGroupComponent}/>
     <Route path='/breachRX/usergroup/add' component={UserGroupAddComponent}/>
    <Route path='/breachRX/usergroup/view' component={UserGroupViewComponent}/>
    <Route path='/breachRX/usergroup/edit' component={UserGroupEditComponent}/>
  </Switch>
);
const Control = () => (
  <Switch>
    <Route path='/breachRX/control/tab' component={ControlComponent}/>
    <Route path='/breachRX/control/add' component={ControlAddComponent}/>
    <Route path='/breachRX/control/view' component={ControlViewComponent}/>
    <Route path='/breachRX/control/edit' component={ControlEditComponent}/>
  </Switch>
);
const Regulation = () => (
  <Switch>
    <Route path='/breachRX/regulation/tab' component={RegulationComponent}/>
    <Route path='/breachRX/regulation/add' component={RegulationAddComponent}/>
    <Route path='/breachRX/regulation/view' component={RegulationViewComponent}/>
    <Route path='/breachRX/regulation/edit' component={RegulationEditComponent}/>
  </Switch>
);

const IncidentTemplate = () => (
  <Switch>
    <Route path='/breachRX/incidentTemplate/tab' component={IncidentTemplateComponent}/>
    <Route path='/breachRX/incidentTemplate/add' component={IncidentTemplateAddComponent}/>
    <Route path='/breachRX/incidentTemplate/view' component={IncidentTemplateViewComponent}/>
    <Route path='/breachRX/incidentTemplate/edit' component={IncidentTemplateEditComponent}/>
  </Switch>
);
const Tasks = () => (
  <Switch>
    <Route path='/breachRX/tasks/tab' component={TasksComponent}/>
    <Route path='/breachRX/tasks/add' component={TasksAddComponent}/>
    <Route path='/breachRX/tasks/view' component={TasksViewComponent}/>
    <Route path='/breachRX/tasks/edit' component={TasksEditComponent}/>
  </Switch>
);
const IntelFeeds = () => (
  <Switch>
    <Route path='/breachRX/intelfeeds/tab' component={IntelFeedsComponent}/>
    <Route path='/breachRX/intelfeeds/add' component={IntelFeedsAddComponent}/>
    <Route path='/breachRX/intelfeeds/view' component={IntelFeedsViewComponent}/>
    <Route path='/breachRX/intelfeeds/edit' component={IntelFeedsEditComponent}/>
  </Switch>
);
const RiskImpacts = () => (
  <Switch>
    <Route path='/breachRX/riskimpacts/tab' component={RiskImpactsComponent}/>
    <Route path='/breachRX/riskimpacts/add' component={RiskImpactsAddComponent}/>
    <Route path='/breachRX/riskimpacts/view' component={RiskImpactsViewComponent}/>
    <Route path='/breachRX/riskimpacts/edit' component={RiskImpactsEditComponent}/>
  </Switch>
);
export default Router;
