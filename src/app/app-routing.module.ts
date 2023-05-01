import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('../pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  // },

  { 
    path: '',
    loadChildren: () => import('../pages/enter-mobile-number/enter-mobile-number.module').then( m => m.EnterMobileNumberPageModule)
  },
   {
    path: 'wallet-levels',
    loadChildren: () => import('../pages/wallet-levels/wallet-levels.module').then( m => m.WalletLevelsPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('../pages/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'create-password',
    loadChildren: () => import('../pages/create-password/create-password.module').then( m => m.CreatePasswordPageModule)
  },
 
  {
    path: 'otp',
    loadChildren: () => import('../pages/otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'pin',
    loadChildren: () => import('../pages/pin/pin.module').then( m => m.PinPageModule)
  },
  {
    path: 'security-question',
    loadChildren: () => import('../pages/security-question/security-question.module').then( m => m.SecurityQuestionPageModule)
  },
  {
    path: 'bill-pay-category',
    loadChildren: () => import('../pages/bill-pay-category/bill-pay-category.module').then( m => m.BillPayCategoryPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('../pages/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'cashback-details',
    loadChildren: () => import('../pages/cashback-details/cashback-details.module').then( m => m.CashbackDetailsPageModule)
  },
  {
    path: 'create-profile',
    loadChildren: () => import('../pages/create-profile/create-profile/create-profile.module').then( m => m.CreateProfilePageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('../pages/faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'profile-details',
    loadChildren: () => import('../pages/profile-details/profile-details.module').then( m => m.ProfileDetailsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('../pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('../pages/support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'request-money',
    loadChildren: () => import('../pages/request-money/request-money.module').then( m => m.RequestMoneyPageModule)
  },
  {
    path: 'send-request',
    loadChildren: () => import('../pages/send-request/send-request.module').then( m => m.SendRequestPageModule)
  },
  {
    path: 'transfer-money',
    loadChildren: () => import('../pages/send-money/transfer-money/transfer-money.module').then( m => m.TransferMoneyPageModule)
  },
  {
    path: '',
    loadChildren: () => import('../pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'add-account',
    loadChildren: () => import('../pages/add-account/add-account.module').then( m => m.AddAccountPageModule)
  },
  {
    path: 'legal',
    loadChildren: () => import('../pages/legal/legal.module').then( m => m.LegalPageModule)
  },
  {
    path: 'transapopup',
    loadChildren: () => import('../pages/transapopup/transapopup.module').then( m => m.TransapopupPageModule)
  },
  {
    path: 'payment-method',
    loadChildren: () => import('../pages/payment-method/payment-method.module').then( m => m.PaymentMethodPageModule)
  },
  {
    path: 'mx-account',
    loadChildren: () => import('../pages/mx-account/mx-account.module').then( m => m.MxAccountPageModule)
  },
  {
    path: 'mxaccount',
    loadChildren: () => import('../pages/mxaccount/mxaccount.module').then( m => m.MxaccountPageModule)
  },
  {
    path: 'favourite-list',
    loadChildren: () => import('../pages/favourite-list/favourite-list.module').then( m => m.FavouriteListPageModule)
  },
  {
    path: 'contacts-list',
    loadChildren: () => import('../pages/send-money/contacts-list/contacts-list.module').then( m => m.ContactsListPageModule)
  },
  {
    path: 'create-profile-address',
    loadChildren: () => import('../pages/create-profile/create-profile-address/create-profile-address.module').then( m => m.CreateProfileAddressPageModule)
  },
  {
    path: 'create-profile-ssn',
    loadChildren: () => import('../pages/create-profile/create-profile-ssn/create-profile-ssn.module').then( m => m.CreateProfileSsnPageModule)
  },
  {
    path: 'how-to-cash-in',
    loadChildren: () => import('../pages/Cash-In/how-to-cash-in/how-to-cash-in.module').then( m => m.HowToCashInPageModule)
  },

  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
