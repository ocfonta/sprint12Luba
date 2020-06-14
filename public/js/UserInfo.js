
class UserInfo {
  /*  Можно лучше: В качестве параметров передавайте не переменные, а объект
  *  если в ходе развития проекта, добавятся переменные, то вам придётся менять код во многих местах
  *  https: //refactoring.guru/ru/smells/long-parameter-list
  * Как пример:
   const myObject = {name:"test", url : "http//:ya.ru"}
   function myFunction(param)
   {
     param.name;
     param.url;
   }
   myFunction(myObject)
  */
  constructor(
    userName, //container
    userJob,
    userPhoto,//container
    inputName,
    inputJob,
    nameValueForm,//textCont
    jobValueForm,//textCont
    api
  ) {
    this.userName = userName;
    this.userJob = userJob;
    this.userPhoto = userPhoto;
    this.inputName = inputName;
    this.inputJob = inputJob;
    this.api = api;
    this.nameValueForm = nameValueForm;
    this.jobValueForm = jobValueForm;
    this.inputInfoApi = this.inputInfoApi.bind(this);
  }
  string(nameStr, jobStr) {


    this.inputName.value = nameStr;
    this.inputJob.value = jobStr;
  }
  setUserInfoEdit() {
    this.nameValueForm = this.inputName.value;
    this.jobValueForm = this.inputJob.value;

  }
  updateUserInfo = (data) => {
    this.userName.textContent = data.name;
    this.userJob.textContent = data.about;
    this.userPhoto.setAttribute('style',
      `background-image: url(${data.avatar})`);
  }
  infoEditListener() {
    document.querySelector('.user-info__edit-button').addEventListener('click', function () {
      userInfo.string(document.querySelector(".user-info__name").textContent, document.querySelector(".user-info__job").textContent);
    });

  };
  infoApi() {
    this.api.getUserInfo()
      .then((data) => {

        return this.updateUserInfo(data);



      })
      .catch((err) => {
        console.log(err);
      })
  }
  inputInfoApi() {
    this.api.setUserInfo(this.nameValueForm, this.jobValueForm)
      .then(res => {
        popup.toggleEditPopup();
        return this.updateUserInfo(res);




      })
      .catch((err) => {
        console.log(err);
      })
  } /**/
}



