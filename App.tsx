import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { SplashScreen } from "./screens/SplashScreen";
import { LandingScreen } from "./screens/LandingScreen";
import { AuthNavigator } from "./screens/auth/AuthNavigator";
import { DashboardScreen } from "./screens/DashboardScreen";
import { FoldersScreen } from "./screens/FoldersScreen";
import { AllNotesScreen } from "./screens/AllNotesScreen";
import { ImagesScreen } from "./screens/ImagesScreen";
import { AllPdfScreen } from "./screens/AllPdfScreen";
import { FolderContentsScreen } from "./screens/FolderContentsScreen";
import { PdfViewerScreen } from "./screens/PdfViewerScreen";
import { ImageViewerScreen } from "./screens/ImageViewerScreen";
import { NoteEditorScreen } from "./screens/NoteEditorScreen";

type AppState =
  | "splash"
  | "landing"
  | "auth"
  | "main"
  | "folders"
  | "notes"
  | "images"
  | "pdf"
  | "folderContents"
  | "pdfViewer"
  | "imageViewer"
  | "noteEditor";

interface NavigationParams {
  folderId?: string;
  folderName?: string;
  pdfId?: string;
  pdfName?: string;
  imageId?: string;
  imageName?: string;
  noteId?: string;
  noteName?: string;
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

  const renderCurrentState = () => {
    switch (currentState) {
      case "splash":
        return <SplashScreen onComplete={handleSplashComplete} />;
      case "landing":
        return (
          <View style={{ flex: 1 }}>
            <LandingScreen onNavigateToAuth={handleNavigateToAuth} />
            <TouchableOpacity
              onPress={() => setCurrentState("main")}
              style={{
                position: "absolute",
                bottom: 100,
                right: 20,
                backgroundColor: "#007AFF",
                padding: 10,
                borderRadius: 8,
              }}
            >
              <Text style={{ color: "white", fontSize: 12 }}>
                Test Dashboard
              </Text>
            </TouchableOpacity>
          </View>
        );
      case "auth":
        return <AuthNavigator onAuthComplete={handleAuthComplete} />;
      case "main":
        return (
          <DashboardScreen
            onNavigateToFolders={handleNavigateToFolders}
            onNavigateToNotes={handleNavigateToNotes}
            onNavigateToImages={handleNavigateToImages}
            onNavigateToPdf={handleNavigateToPdf}
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
