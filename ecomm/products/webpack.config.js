const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081
    },
    plugins: [
        new ModuleFederationPlugin({
            // Name of this remote.
            name: 'products',
            // Sets the name of the manifest file.
            filename: 'remoteEntry.js',
            // Modules that should be exposed.
            exposes: {
                // Aliases filenames.
                './ProductsIndex': './src/bootstrap'
            },
            shared: ['faker']
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};
