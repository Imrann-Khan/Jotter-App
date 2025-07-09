import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { SplashScreen } from "./screens/SplashScreen";
import { LandingScreen } from "./screens/LandingScreen";
import { AuthNavigator } from "./screens/auth/AuthNavigator";
import { DashboardScreen } from "./screens/DashboardScreen";
import { FavoritesScreen } from "./components/dashboard/FavoritesScreen";
import { FoldersScreen } from "./screens/FoldersScreen";
import { AllNotesScreen } from "./screens/AllNotesScreen";
import { ImagesScreen } from "./screens/ImagesScreen";
import { AllPdfScreen } from "./screens/AllPdfScreen";
import { FolderContentsScreen } from "./screens/FolderContentsScreen";
import { PdfViewerScreen } from "./screens/PdfViewerScreen";
import { ImageViewerScreen } from "./screens/ImageViewerScreen";
import { NoteEditorScreen } from "./screens/NoteEditorScreen";
import { PinLockScreen } from "./screens/PinLockScreen";
import { HiddenItemsScreen } from "./screens/HiddenItemsScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { EditProfileScreen } from "./screens/EditProfileScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { ChangePasswordScreen } from "./screens/ChangePasswordScreen";
import { TermsAndConditionsScreen } from "./screens/TermsAndConditionsScreen";
import { PrivacyPolicyScreen } from "./screens/PrivacyPolicyScreen";
import { AboutUsScreen } from "./screens/AboutUsScreen";
import { SupportScreen } from "./screens/SupportScreen";
import { CalendarScreen } from "./screens/CalendarScreen";

type AppState =
  | "splash"
  | "landing"
  | "auth"
  | "main"
  | "favorites"
  | "calendar"
  | "folders"
  | "notes"
  | "images"
  | "pdf"
  | "folderContents"
  | "pdfViewer"
  | "imageViewer"
  | "noteEditor"
  | "pinLock"
  | "hiddenItems"
  | "profile"
  | "editProfile"
  | "settings"
  | "changePassword"
  | "termsConditions"
  | "privacyPolicy"
  | "aboutUs"
  | "support";

interface NavigationParams {
  folderId?: string;
  folderName?: string;
  pdfId?: string;
  pdfName?: string;
  imageId?: string;
  imageName?: string;
  noteId?: string;
  noteName?: string;
  pinTitle?: string;
  pinLength?: number;
}

export const JotterMobileApp: React.FC = () => {
  const [currentState, setCurrentState] = useState<AppState>("splash");
  const [navigationParams, setNavigationParams] = useState<NavigationParams>(
    {},
  );

  const handleSplashComplete = () => {
    setCurrentState("landing");
  };

  const handleNavigateToAuth = () => {
    setCurrentState("auth");
  };

  const handleAuthComplete = () => {
    setCurrentState("main");
  };

  const handleNavigateToFavorites = () => {
    setCurrentState("favorites");
  };

  const handleNavigateToFolders = () => {
    setCurrentState("folders");
  };

  const handleNavigateToNotes = () => {
    setCurrentState("notes");
  };

  const handleNavigateToImages = () => {
    setCurrentState("images");
  };

  const handleNavigateToPdf = () => {
    setCurrentState("pdf");
  };

  const handleBackToDashboard = () => {
    setCurrentState("main");
  };

  const handleNavigateToFolderContents = (
    folderId: string,
    folderName: string,
  ) => {
    setNavigationParams({ folderId, folderName });
    setCurrentState("folderContents");
  };

  const handleNavigateToPdfViewer = (pdfId: string, pdfName: string) => {
    setNavigationParams({ pdfId, pdfName });
    setCurrentState("pdfViewer");
  };

  const handleNavigateToImageViewer = (imageId: string, imageName: string) => {
    setNavigationParams({ imageId, imageName });
    setCurrentState("imageViewer");
  };

  const handleNavigateToNoteEditor = (noteId?: string, noteName?: string) => {
    setNavigationParams({ noteId, noteName });
    setCurrentState("noteEditor");
  };

  const handleBackToFolders = () => {
    setCurrentState("folders");
  };

  const handleBackToFolderContents = () => {
    setCurrentState("folderContents");
  };

  const handleNavigateToPinLock = (title?: string, pinLength?: number) => {
    setNavigationParams({ pinTitle: title, pinLength });
    setCurrentState("pinLock");
  };

  const handleNavigateToHiddenItems = () => {
    setCurrentState("hiddenItems");
  };

  const handlePinEntered = (pin: string) => {
    console.log("PIN entered:", pin);
    // Navigate to hidden items after successful PIN entry
    setCurrentState("hiddenItems");
  };

  const handleTabPress = (tab: string) => {
    switch (tab) {
      case "home":
        setCurrentState("main");
        break;
      case "bookmark":
        setCurrentState("favorites");
        break;
      case "calendar":
        setCurrentState("calendar");
        break;
      case "profile":
        setCurrentState("profile");
        break;
    }
  };

  const handleNavigateProfile = (screen: string) => {
    switch (screen) {
      case "Profile":
        setCurrentState("profile");
        break;
      case "EditProfile":
        setCurrentState("editProfile");
        break;
      case "Settings":
        setCurrentState("settings");
        break;
      case "ChangePassword":
        setCurrentState("changePassword");
        break;
      case "TermsConditions":
        setCurrentState("termsConditions");
        break;
      case "PrivacyPolicy":
        setCurrentState("privacyPolicy");
        break;
      case "AboutUs":
        setCurrentState("aboutUs");
        break;
      case "Support":
        setCurrentState("support");
        break;
    }
  };

  const handleLogout = () => {
    setCurrentState("auth");
  };

  const handleDeleteAccount = () => {
    setCurrentState("auth");
  };

  const renderCurrentState = () => {
    switch (currentState) {
      case "splash":
        return <SplashScreen onComplete={handleSplashComplete} />;
      case "landing":
        return <LandingScreen onNavigateToAuth={handleNavigateToAuth} />;
      case "auth":
        return <AuthNavigator onAuthComplete={handleAuthComplete} />;
      case "main":
        return (
          <DashboardScreen
            onNavigateToFolders={handleNavigateToFolders}
            onNavigateToNotes={handleNavigateToNotes}
            onNavigateToImages={handleNavigateToImages}
            onNavigateToPdf={handleNavigateToPdf}
            onTabPress={handleTabPress}
          />
        );
      case "favorites":
        return (
          <FavoritesScreen
            onNavigateBack={handleBackToDashboard}
            onTabPress={handleTabPress}
          />
        );
      case "calendar":
        return (
          <CalendarScreen
            onNavigateBack={handleBackToDashboard}
            onTabPress={handleTabPress}
          />
        );
      case "folders":
        return (
          <FoldersScreen
            onBackPress={handleBackToDashboard}
            onFolderPress={handleNavigateToFolderContents}
          />
        );
      case "notes":
        return (
          <AllNotesScreen
            onBackPress={handleBackToDashboard}
            onNotePress={handleNavigateToNoteEditor}
          />
        );
      case "images":
        return <ImagesScreen onBackPress={handleBackToDashboard} />;
      case "pdf":
        return (
          <AllPdfScreen
            onBackPress={handleBackToDashboard}
            onPdfPress={handleNavigateToPdfViewer}
          />
        );
      case "folderContents":
        return (
          <FolderContentsScreen
            folderId={navigationParams.folderId || ""}
            folderName={navigationParams.folderName || "Folder"}
            onBackPress={handleBackToFolders}
            onItemPress={(item) => {
              if (item.type === "pdf") {
                handleNavigateToPdfViewer(item.id, item.name);
              } else if (item.type === "image") {
                handleNavigateToImageViewer(item.id, item.name);
              } else if (item.type === "note") {
                handleNavigateToNoteEditor(item.id, item.name);
              }
            }}
          />
        );
      case "pdfViewer":
        return (
          <PdfViewerScreen
            pdfId={navigationParams.pdfId || ""}
            pdfName={navigationParams.pdfName || "PDF"}
            onBackPress={handleBackToFolderContents}
          />
        );
      case "imageViewer":
        return (
          <ImageViewerScreen
            imageId={navigationParams.imageId || ""}
            imageName={navigationParams.imageName || "Image"}
            onBackPress={handleBackToFolderContents}
          />
        );
      case "noteEditor":
        return (
          <NoteEditorScreen
            noteId={navigationParams.noteId}
            noteName={navigationParams.noteName}
            onBackPress={handleBackToFolderContents}
            onSave={(title, content) => {
              console.log("Note saved:", title, content);
            }}
          />
        );
      case "profile":
        return (
          <ProfileScreen
            onNavigate={handleNavigateProfile}
            onLogout={handleLogout}
            onTabPress={handleTabPress}
          />
        );
      case "editProfile":
        return <EditProfileScreen onNavigate={handleNavigateProfile} />;
      case "settings":
        return (
          <SettingsScreen
            onNavigate={handleNavigateProfile}
            onDeleteAccount={handleDeleteAccount}
          />
        );
      case "changePassword":
        return <ChangePasswordScreen onNavigate={handleNavigateProfile} />;
      case "termsConditions":
        return (
          <TermsAndConditionsScreen
            onBackPress={() => setCurrentState("settings")}
          />
        );
      case "privacyPolicy":
        return (
          <PrivacyPolicyScreen
            onBackPress={() => setCurrentState("settings")}
          />
        );
      case "aboutUs":
        return (
          <AboutUsScreen onBackPress={() => setCurrentState("settings")} />
        );
      case "support":
        return <SupportScreen onBackPress={() => setCurrentState("profile")} />;
      default:
        return <SplashScreen onComplete={handleSplashComplete} />;
    }
  };

  return <View style={styles.container}>{renderCurrentState()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});

export default JotterMobileApp;
