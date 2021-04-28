const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
    mode: 'development',
    devServer: {
        port: 8080,
    },
    plugins: [
        new ModuleFederationPlugin({
            // Added only for clarity and convention. Not used for Hosts. It is only needed on Remotes.
            name: 'container',
            // Lists projects that the Container can search to get additional code.
            remotes: {
                // Alias that will be used in this project in order to refer for code originating from the remote.
                products: 
                // Remote name as declared on the remote's webpack config @ URL for the remote's manifest file.
                'products@http://localhost:8081/remoteEntry.js',
                cart: 'cart@http://localhost:8082/remoteEntry.js',
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
