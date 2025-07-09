export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  VerificationCode: { email: string };
  ResetPassword: undefined;
};

export type RootStackParamList = {
  Splash: undefined;
  Landing: undefined;
  Auth: undefined;
  Main: undefined;
  Folders: undefined;
  AllNotes: undefined;
  Images: undefined;
  AllPdf: undefined;
  FolderContents: { folderId: string; folderName: string };
  PdfViewer: { pdfId: string; pdfName: string };
  ImageViewer: { imageId: string; imageName: string };
  NoteEditor: { noteId?: string; noteName?: string };
  PinLock: { title?: string; pinLength?: number };
  HiddenItems: undefined;
  Profile: undefined;
  EditProfile: undefined;
  Settings: undefined;
  ChangePassword: undefined;
};

export type AppState =
  | "splash"
  | "landing"
  | "auth"
  | "main"
  | "folderContents"
  | "pdfViewer"
  | "imageViewer"
  | "noteEditor"
  | "pinLock"
  | "hiddenItems";
