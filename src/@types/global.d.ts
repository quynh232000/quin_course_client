interface GoogleLoginResponse {
  credential: string;
  select_by?: string; // Optional property
}
interface GoogleButtonOptions {
  theme?: "outline" | "filled_blue" | "filled_black"; // Adjust based on available options
  size?: "small" | "medium" | "large";
  shape?: "rectangular" | "pill" | "circle"|'rectangle';
  width?: number;
}
declare global {
  interface Window {
    google: {
      accounts: {
        id: {
          initialize: (config: {
            client_id: string;
            callback: (response: GoogleLoginResponse) => void;
          }) => void;
          renderButton: (element: HTMLElement | null, options: GoogleButtonOptions) => void;
          prompt: () => void;
        };
      };
    };
  }
}

export {};
