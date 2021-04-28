const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
    mode: 'development',
    devServer: {
        port: 8082
    },
    plugins: [
        new ModuleFederationPlugin({
            // Name of this remote.
            name: 'cart',
            // Sets the name of the manifest file.
            filename: 'remoteEntry.js',
            // Modules that should be exposed.
            exposes: {
                // Aliases filenames.
                './CartShow': './src/bootstrap'
            },
            shared: ['faker']
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};
