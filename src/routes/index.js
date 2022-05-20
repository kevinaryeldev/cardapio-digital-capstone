import { Route, Switch } from "react-router-dom";

import CartPage from "../pages/consumer/CartPage";
import HomePage from "../pages/consumer/HomePage";
import MenuPage from "../pages/consumer/MenuPage";

import LandingPage from "../pages/collaborator/LandingPage";
import LoginPage from "../pages/collaborator/LoginPage";
import SignUpPage from "../pages/collaborator/SignUpPage";
import DashboardPage from "../pages/collaborator/admin/DashboardPage";
import FeedbacksPage from "../pages/collaborator/admin/FeedbacksPage";
import ProfilePage from "../pages/collaborator/admin/ProfilePage";
import RequestsPage from "../pages/collaborator/admin/RequestsPage";
import StatisticsPage from "../pages/collaborator/admin/StatisticsPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route exact path="/admin" component={DashboardPage} />
      <Route path="/admin/requests" component={RequestsPage} />
      <Route path="/admin/feedbacks" component={FeedbacksPage} />
      <Route path="/admin/statistics" component={StatisticsPage} />
      <Route path="/admin/profile" component={ProfilePage} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/menu" component={MenuPage} />
      <Route exact path="/cart" component={CartPage} />
    </Switch>
  );
};

export default Routes;
