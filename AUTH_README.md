# Authentication System

This document describes the authentication system implemented for the Jotter mobile app.

## Overview

The authentication system includes the following screens:

1. **Login Screen** - Email/password login with Google Sign-In option
2. **Sign Up Screen** - User registration with terms acceptance
3. **Forgot Password Screen** - Email input for password reset
4. **Verification Code Screen** - 6-digit code verification
5. **Reset Password Screen** - New password entry

## File Structure

```
screens/auth/
├── AuthNavigator.tsx     # Main navigation controller
├── LoginScreen.tsx       # Login screen component
├── SignUpScreen.tsx      # Registration screen component
├── ForgotPasswordScreen.tsx  # Password reset initiation
├── VerificationCodeScreen.tsx  # Code verification
├── ResetPasswordScreen.tsx  # Password reset completion
└── index.tsx            # Export all auth components

components/ui/
├── TextInput.tsx        # Custom text input component
├── Button.tsx           # Custom button component
├── GoogleIcon.tsx       # Google icon SVG component
├── BackButton.tsx       # Back navigation button
└── index.tsx           # Export all UI components

types/
└── navigation.ts        # TypeScript navigation types
```

## Features

### Login Screen

- Email and password input fields
- Password visibility toggle
- "Forgot Password" link
- Login button
- Sign up navigation link
- Google Sign-In button
- Responsive design with proper spacing

### Sign Up Screen

- Username field with custom styling
- Email and password inputs
- Password confirmation
- Terms and conditions checkbox
- Sign up button
- Login navigation link
- Google Sign-Up button

### Forgot Password Flow

1. **Email Input**: User enters email address
2. **Verification Code**: 6-digit code input with resend option
3. **Reset Password**: New password and confirmation

### Design Features

- Exact match to provided Figma design
- Custom input components with proper styling
- SVG icons for better scalability
- Responsive layout
- Proper color scheme matching design
- Custom fonts (Inter, Archivo, Open Sans)

## Navigation Flow

```
Landing Screen → Auth Navigator
                      ↓
                 Login Screen ←→ Sign Up Screen
                      ↓
              Forgot Password Screen
                      ↓
            Verification Code Screen
                      ↓
            Reset Password Screen
                      ↓
                 Login Screen
```

## Usage

1. **From Landing Screen**: Tap "Get Started for free" to enter auth flow
2. **Switch between Login/SignUp**: Use the navigation links at the bottom
3. **Password Reset**: Tap "Forgot Password" from login screen
4. **Complete Flow**: Follow the guided steps for password reset

## Integration

The authentication system is integrated into the main app through:

- `App.tsx` - Main app state management
- `AuthNavigator.tsx` - Handles auth screen navigation
- State management for auth completion

## Customization

To customize the authentication flow:

1. Modify styles in individual screen components
2. Update navigation logic in `AuthNavigator.tsx`
3. Add API integration for actual authentication
4. Extend validation logic as needed

## API Integration Points

The following methods need backend integration:

- `handleLogin()` - User authentication
- `handleSignUp()` - User registration
- `handleSendVerificationCode()` - Send reset code
- `handleVerifyCode()` - Verify reset code
- `handleResetPassword()` - Update password
- `handleGoogleSignIn()` - OAuth integration

## Styling

All components use:

- Color scheme from design specification
- Custom spacing and typography
- Shadow effects and border radius
- Responsive design principles
- Platform-specific adjustments for iOS/Android
