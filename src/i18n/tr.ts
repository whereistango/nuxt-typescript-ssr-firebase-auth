import tr from 'vee-validate/dist/locale/tr.json'

const messages = {
  validation: tr.messages,

  common: {
    field: {
      name: 'Ad',
      namePlaceHolder: 'adinizi giriniz',
      email: 'E-Posta',
      emailPlaceHolder: 'E-posta adresinizi giriniz',
      password: 'Parola',
      passwordPlaceHolder: 'Parolanizi giriniz',
      confirmPassword: 'Parola Tekrar',
      confirmPasswordPlaceHolder: 'Parolanizi tekrar giriniz',
    },
    cancel: 'Iptal'
  },

  topNavbar: {
    home: 'Anasayfa',
    profile: 'Hesap',
    register: 'Kayit Ol',
    login: 'Giris Yap',
    logout: 'Cikis Yap'
  },

  page: {
    home: {
      title: 'Anasayfaya hosgeldiniz'
    },
    action: {
      processing: 'Isleniyor... Lutfen bekleyiniz.'
    }
  },

  notification: {
    verifyMailSent: 'Dogrulama maili {email} adresine gonderilmistir',
    verifyMailNotSent: 'Dogrulama maili {email} adresine gonderilemiyor',
    mailVerified: 'E-posta dogrulandi!',
    sendPasswordResetEmail: 'Parola sifirlama maili gonderildi',
    passwordResetVerified: 'Parola sifirlama onaylandi!',
    confirmPasswordReset: 'Parola sifirlama onaylandi',
    providerLinked: '<b>{provider}</b> hesaba basari ile baglandi',
    providerUnlinked: '<b>{provider}</b> baglantisi hesaptan koparildi',
    unlinkNotAllowed: 'Son login method <b>{provider}</b> hesaptan koparilamaz',
    passwordUpdated: 'Parolaniz basarili bir sekilde guncellendi.'
  },

  form: {
    forgetPassword: {
      title: 'Parolami unuttum',
      submit: 'Mail Gonder'
    },
    loginForm: {
      title: 'Giris Yap',
      submit: 'Giris Yap',
      forgetPassword: 'Parolami unuttum',
      noAccount: 'Hesabiniz yok mu? Kayit Ol!'
    },
    social: {
      title: {
        login: 'Sosyal Media ile Login',
        register: 'Sosyal Medya'
      },
      loginWith: '{provider} ile Giris Yap',
    },

    resetPassword: {
      title: 'Parolami yenile',
      submit: 'Parolami Degistir'
    },
    registerForm: {
      title: 'Kayit Ol',
      submit: 'Kayit Ol',
      hasAccount: 'Hesabiniz var mi? Giris Yap!'
    },
  },

  card: {
    user: {
      title: 'Profil :',
      userId: 'Kimlik:',
      name: 'Ad :',
      email: 'E-posta :',
      providers: 'Saglayicilar:',
      verifyButton: 'E-posta Dogrula',
      updatePasswordButton: 'Parolayi guncelle'
    }
  },

  provider: {
    linkPasswordProvider: {
      socialLogin: {
        title: 'Sosyal Medya Giris',
      },
      passwordForm:
        {
          title: 'Parola Belirleme',
          description: '<b>{email}</b> icin bir parola belirleyiniz',
          submit: 'Parolayi Kaydet'
        }
    },
    tooltip: {
      linkedProvider: '{provider} hesabiniza bagli. Baglantiyi kopar!',
      unlinkedProvider: '{provider} hesabiniza bagli degil. Bagla!'
    },
    dialog: {
      delete: {
        title: '{provider}\'i Sil',
        message: 'Hesabinizdan {provider}\'i silmek mi istiyorsunuz?<br>Bu islem geri alinamaz',
        confirm: 'Delete'
      }
    }
  }

};

export default messages;
