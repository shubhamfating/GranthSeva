import HomePage from "./HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterCorporatorPage from "./container/admin/corporator/RegisterCorporatorPage";
import CorporatorListPage from "./container/super_admin/corporators/CorporatorListPage";
import { uiRoutes } from "./routes/ui/uiRoutes";
import FunctionCreatePage from "./container/admin/eventfunctions/FunctionCreatePage";
import FunctionsTable from "./container/admin/eventfunctions/FunctionsTable";
import EBooks from "./container/admin/elearning/EBooks";
import ComplaintPage from "./container/user/Complaint/ComplaintAddPage";
import ComplaintShowPage from "./container/user/Complaint/ComplaintShowPage";
import PersonalAddPage from "./container/admin/residents/PersonalAddPage";
import CorporaterWorkTable from "./container/admin/work/CorporatorWorkTable";
import PersonalTablePage from "./container/admin/residents/PersonalTablePage";
import LoginPage from "./container/auth/LoginPage";
import Regisration from "./container/auth/RegisrationPage";
import BachatgatRegistrationPage from "./container/admin/bachatgat/BachatgatRegistrationPage";
import SavingGroupListPage from "./container/admin/bachatgat/SavingGroupListPage";
import MemberGroupsPage from "./container/admin/bachatgat/member/MemberGroupsPage";
import UpdateMembersRegistrationsForm from "./container/admin/bachatgat/member/UpdateMembersRegistrationsForm";
import UpdateEBook from "./container/admin/elearning/UpdateEbook";
import UpdateComplaintPage from "./container/user/Complaint/UpadateComplaintPage";

import AddSchemePage from "./container/admin/Scheme/AddSchemePage";
import AddBooks from "./container/admin/elearning/AddBooks";
import ShcemeTable from "./container/admin/Scheme/ShcemeTable";
import UpdateSchemePage from "./container/admin/Scheme/UpdateSchemePage";
import CoroporatorProfilePage from "./container/admin/corporator/CoroporatorProfilePage";
import CorporatorWorkPage from "./container/admin/work/CorporatorWorkPage";
import UpdateCorporatorWorkPage from "./container/admin/work/UpdateCorporatorWorkPage";
import UpdateBachatgatRagistrationPage from "./container/admin/bachatgat/UpdateBachatgatRagistrationPage";
import BachatgatWorkTable from "./container/admin/bachatgat/work/BachatgatWorkTable";
import BachatgatWorkRegistrationPage from "./container/admin/bachatgat/work/BachatgatWorkRegistrationPage";
import UpdateBachatgatWorkRegistration from "./container/admin/bachatgat/work/UpdateBachatgatWorkRegistration";
import ComplaintShowCard from "./container/user/Complaint/ComplaintShowCard";
import FunctionShowCards from "./container/admin/eventfunctions/FunctionShowCards";
import ShowBookCards from "./container/admin/elearning/ShowBookCards";
import AddVoterPage from "./container/admin/voter/AddVoterPage";
import ShowVoterPage from "./container/admin/voter/ShowVoterPage";
import UpdateVoterPage from "./container/admin/voter/UpdateVoterPage";
import MemberRegistrationPage from "./container/admin/bachatgat/member/MemberRegistrationPage";
import UserHomePage from "./container/home/UserHomePage";
import OperatorList from "./operator/OperatorList";
import CreateOperatorPage from "./operator/CreateOperatorPage";
import UpdateOperatorPage from "./operator/UpdateOperatorPage";
import PermissionPage from "./operator/PermissionPage";
import FunctionUpdatePage from "./container/admin/eventfunctions/FunctionUpdatePage";
import CorporatorList from "./container/admin/corporator/CorporatorList";
import CorporatorPermissionPage from "./container/admin/corporator/CorporatorPermissionPage";
import UpdateRegisterCorporaterPage from "./container/admin/corporator/UpdateRegisterCorporaterPage";
import NotAuthrized from "./components/admin/NotAuthrized";
import CorporatorInactieListPage from "./container/super_admin/corporators/CorporatorInactieListPage";
import { getUserToken } from "./config/user";
import axios from "axios";
import AddElectionPage from "./container/admin/election/AddElectionPage";
import ElectionListPage from "./container/admin/election/ElectionListPage";
import UpdateElectionPage from "./container/admin/election/UpdateElectionPage";
import ElectionVotingList from "./container/admin/election/ElectionVotingList";
import Categories from "./container/admin/category/Categories";


function App() {

  if (getUserToken()) {
    const token = getUserToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }


  const Users = {
    Admin: "admin",
    SuperAdmin: "super-admin",
    Public: "public"
  }
  const Current_User = Users.Public
  return (
    <Router>
      <Routes>
        <Route path={uiRoutes.authHome} element={<HomePage Current_User={Current_User} />} />
        <Route path={uiRoutes.operator.show} element={<OperatorList Current_User={Current_User} />} />
        <Route path={uiRoutes.operator.add} element={<CreateOperatorPage Current_User={Current_User} />} />
        <Route path={uiRoutes.operator.update} element={<UpdateOperatorPage Current_User={Current_User} />} />
        <Route path={uiRoutes.operator.permission} element={<PermissionPage Current_User={Current_User} />} />



        <Route
          path={uiRoutes.admin.corporator.create}
          element={<RegisterCorporatorPage Current_User={Current_User} />}
        />
        <Route
          path={uiRoutes.login}
          element={<LoginPage Current_User={Current_User} />}
        />
        <Route
          path={uiRoutes.register}
          element={<Regisration Current_User={Current_User} />}
        />
        <Route path={uiRoutes.userHome} element={<UserHomePage />} />
        <Route path={uiRoutes.admin.corporator.profile} element={<CoroporatorProfilePage />} />
        <Route path={uiRoutes.admin.corporator.show} element={<CorporatorList />} />
        <Route path={uiRoutes.admin.corporator.permission} element={<CorporatorPermissionPage />} />
        <Route path={uiRoutes.admin.corporator.update} element={<UpdateRegisterCorporaterPage />} />

        <Route path={uiRoutes.super_admin.corporator.list} element={<CorporatorListPage />} />
        <Route path={uiRoutes.admin.events.create} element={<FunctionCreatePage />} />
        <Route path={uiRoutes.admin.events.show} element={<FunctionsTable />} />
        <Route path={uiRoutes.admin.events.edit} element={<FunctionUpdatePage />} />

        <Route path={uiRoutes.admin.events.card} element={<FunctionShowCards />} />

        <Route path={uiRoutes.admin.work.add} element={<CorporatorWorkPage />} />
        <Route path={uiRoutes.admin.work.edit} element={<UpdateCorporatorWorkPage />} />

        <Route path={uiRoutes.admin.work.show} element={<CorporaterWorkTable />} />
        <Route path={uiRoutes.user.eBooks.show} element={<EBooks />} />
        <Route path={uiRoutes.user.eBooks.update} element={<UpdateEBook />} />
        <Route path={uiRoutes.user.eBooks.card} element={<ShowBookCards />} />


        {/* Doubt In Admin Ebooks and user Ebook */}

        <Route path={uiRoutes.admin.ebook.add} element={<AddBooks />}/>
        <Route path={uiRoutes.admin.ebook.update} element={<UpdateEBook/>} />
        <Route path={uiRoutes.admin.ebook.show} element={<EBooks/>}/>

        <Route path={uiRoutes.user.complaint.add} element={<ComplaintPage />} />
        <Route path={uiRoutes.user.complaint.update} element={<UpdateComplaintPage />} />
        <Route path={uiRoutes.user.complaint.card} element={<ComplaintShowCard />} />
        <Route path={uiRoutes.user.complaint.show} element={<ComplaintShowPage />} />
        <Route path={uiRoutes.admin.residents.add} element={<PersonalAddPage />} />
        <Route path={uiRoutes.admin.residents.show} element={<PersonalTablePage />} />
        <Route path={uiRoutes.admin.bachatgat.add} element={<BachatgatRegistrationPage />} />
        <Route path={uiRoutes.admin.bachatgat.work.show} element={<BachatgatWorkTable />} />
        <Route path={uiRoutes.admin.bachatgat.work.add} element={<BachatgatWorkRegistrationPage />} />
        <Route path={uiRoutes.admin.bachatgat.work.update} element={<UpdateBachatgatWorkRegistration />} />
        <Route path={uiRoutes.admin.bachatgat.update} element={<UpdateBachatgatRagistrationPage />} />
        <Route path={uiRoutes.admin.bachatgat.show} element={<SavingGroupListPage />} />
        <Route path={uiRoutes.admin.bachatgat.member} element={<MemberGroupsPage />} />
        <Route path={uiRoutes.admin.member.add} element={<MemberRegistrationPage />} />
        <Route path={uiRoutes.admin.member.updateMember} element={<UpdateMembersRegistrationsForm />} />
        <Route path={uiRoutes.admin.scheme.add} element={<AddSchemePage />} />
        <Route path={uiRoutes.admin.scheme.show} element={<ShcemeTable />} />
        <Route path={uiRoutes.admin.scheme.update} element={<UpdateSchemePage />} />

        <Route path={uiRoutes.admin.voter.add} element={<AddVoterPage />} />
        <Route path={uiRoutes.admin.voter.show} element={<ShowVoterPage />} />
        <Route path={uiRoutes.admin.voter.update} element={<UpdateVoterPage />} />

        <Route path={uiRoutes.admin.election.add} element={<AddElectionPage />} />
        <Route path={uiRoutes.admin.election.show} element={<ElectionListPage />} />
        <Route path={uiRoutes.admin.election.update} element={<UpdateElectionPage />} />
        <Route path={uiRoutes.admin.election.voting} element={<ElectionVotingList />} />
        <Route path={uiRoutes.admin.election.voting} element={<ElectionVotingList />} />

        <Route path={uiRoutes.admin.category.show} element={<Categories />} />

        <Route path="/admin/election/voting" element={<ElectionVotingList />} />
        {/* <Route path="/admin/election/voted" element={<ToggledVotersList/>} /> */}
        {/* Super Admin  */}

        <Route path={uiRoutes.super_admin.corporator.list} element={<CorporatorListPage />} />
        <Route path={uiRoutes.super_admin.corporator.inactiveList} element={<CorporatorInactieListPage />} />

        <Route path={uiRoutes.notAuthrized} element={<NotAuthrized />} />

      </Routes>
    </Router>
  );
}

export default App;

// <Route path={"/"} element={<HomePage />} />
// <Route
//   path={uiRoutes.admin.corporate.profile.create}
//   element={<RegisterCorporatorPage />}
// />
// <Route path={"/corporate-list"} element={<CorporatorListPage />} />
