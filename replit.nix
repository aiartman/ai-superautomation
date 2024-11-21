{ pkgs }: {
    deps = [
        pkgs.nodejs-18_x
        pkgs.nodePackages.typescript-language-server
        pkgs.nodePackages.postcss
        pkgs.nodePackages.autoprefixer
        pkgs.nodePackages.tailwindcss
        pkgs.yarn
    ];
}