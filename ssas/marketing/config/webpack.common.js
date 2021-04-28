module.exports = {
    module: {
        rules: [
            {
                // Whenever we import a file with a extension of .m or .js we want it to be processed by Babble
                test: /\.m?js$/,
                // Exclude files in node_modules
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react','@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    }
}