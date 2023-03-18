

import React from "react";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // 更新 state 以至於下一個 render 會顯示 fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // 你也可以把錯誤記錄到一個錯誤回報系統服務

    }

    render() {
        if (this.state.hasError) {
            // 你可以 render 任何客製化的 fallback UI
            return <h1>有什麼東西出錯了...</h1>;
        }

        return this.props.children;
    }
}




