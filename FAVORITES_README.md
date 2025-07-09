# Favorites Screen

A new screen component that displays the user's favorite items with the exact styling from the Figma design.

## Features

- ✅ Status bar with time and system indicators
- ✅ "Favorites" header with proper spacing and typography
- ✅ Search bar with "Search here" placeholder
- ✅ File list showing different types: images, folders, links, PDFs
- ✅ Each item shows icon, name, and date
- ✅ Three-dot menu button for each item
- ✅ Context menu with "Un-favorite" option (instead of "Favorite")
- ✅ Bottom navigation with "Favourite" tab active
- ✅ Floating action button with plus icon
- ✅ Proper spacing and colors matching the design

## Usage

```tsx
import { FavoritesScreen } from './screens';

// Basic usage
<FavoritesScreen />

// With navigation handlers
<FavoritesScreen
  onNavigateBack={() => console.log('Navigate back')}
  onTabPress={(tab) => console.log('Tab pressed:', tab)}
/>
```

## Components Used

- `StatusBar` - Custom status bar component
- `SearchBar` - Search input component
- `BottomNavigation` - Bottom tab navigation
- `ContextMenu` - Context menu with file actions
- File icons: `ImageIcon`, `FolderIcon`, `LinkIcon`, `PDFIcon`

## Styling

The component uses exact colors, fonts, and spacing from the Figma design:

- Background: `#FFFFFF`
- Text colors: `#303030` (main), `#747474` (secondary)
- Font families: `Inter` (header), `Archivo` (file names)
- Border color: `#EAEAEA`
- Icon colors and fills match design specifications

## Context Menu

The context menu shows different options for favorites screen:

- "Un-favorite" (instead of "Favorite")
- "Copy"
- "Rename"
- "Duplicate"
- "Delete"
- "Share"

## Integration

The screen is already exported from `screens/index.tsx` and can be integrated into your navigation system. The bottom navigation shows the "Favourite" tab as active with the proper indicator.
