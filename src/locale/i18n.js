import i18next from "i18next";
import I18NextVue from "i18next-vue";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // init i18next 
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          // here we will place our translations...
          login: "Login",
          logout: "Logout",
          register: "Register",
          member: "Not a member yet?",
          submit: "Submit",
          name: "Name",
          email: "Email",
          password: "Password",
          demoApp: "Demo App",
          dashboard: "Dashboard",
          stats: "Stats",
          allJobs: "All Jobs",
          addJob: "Add Job",
          profile: "Profile",
          prndingApplications: "Pending Applications",
          interviewsScheduled: "Interview Scheduled",
          jobsDeclined: "Job Declined",
          areaChart: "Area Chart",
          barChart: "Bar Chart",

          // search form
          searchForm: "Search Form",
          search: "Search",
          status: "Status",
          type: "Type",
          sort: "Sort",
          clearFilterBtn: "Clear Filters",

          // add job
          position: "Position",
          company: "Company",
          jobLocation: "Job Location",
          jobType: "Job Type",
          clearBtn: "Clear",
          submitBtn: "Submit", 
          editBtn: "Edit",
          deleteBtn: 'Delete',

          // profile
          saveChangesBtn: "Save Changes",
          pleaseWaitBtn: 'Pleease wait...',

          // all-jobs
          jobFound: 'job found',

           // page btn
           prevBtn: 'prev',
           nextBtn: 'next'
        },
      },
      vn: {
        translation: {
          login: "Đăng nhập",
          logout: "Đăng xuất",
          register: "Đăng ký",
          member: "Chưa phải là thành viên?",
          submit: "Đăng nhập",
          name: "Tên",
          email: "Email",
          password: "Mật khẩu",
          demoApp: "Dùng thử ứng dụng",
          dashboard: "Bảng điều khiển",
          stats: "Số liệu thống kê",
          allJobs: "Tất cả công việc",
          addJob: "Thêm công việc",
          profile: "Hồ sơ",
          prndingApplications: "Ứng ụng chờ xử lý",
          interviewsScheduled: "Phỏng vấn theo lịch trình",
          jobsDeclined: "Công việc bị từ chối",
          areaChart: "Biểu đồ khu vực",
          barChart: "Biểu đồ cột",

          // search form
          searchForm: "Form tìm kiếm",
          search: "Tìm kiếm",
          status: "Trạng thái",
          type: "Loại",
          sort: "Sắp xếp",
          clearFilterBtn: "Xóa bộ lọc",

          // add job
          position: "Chức vụ",
          company: "Công ty",
          jobLocation: "Địa chỉ làm việc",
          jobType: "Loại công việc",
          clearBtn: "Làm mới",
          submitBtn: "Gửi đi",
          editBtn: "Sửa",
          deleteBtn: 'Xóa',

          // profile
          saveChangesBtn: "Lưu thay đổi",
          pleaseWaitBtn: 'Vui lòng chờ...',

          // all-jobs
          jobFound: 'công việc được tìm thấy',

          // page btn
          prevBtn: 'Trước đó',
          nextBtn: 'Kế tiếp'
        },
      },
    },
  });

export default function (app) {
  app.use(I18NextVue, { i18next });
  return app;
}
