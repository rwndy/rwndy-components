import React from 'react';
interface LoginBottomSheetProps {
    onLogin: () => void;
    onClose: () => void;
}
declare const LoginBottomSheet: ({ onLogin, onClose }: LoginBottomSheetProps) => React.JSX.Element;
export default LoginBottomSheet;
