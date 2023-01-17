const path = require('path');

module.exports = {
    resolve: {
        extensions: ['*', '.js', '.jsx', '.css']
    },
    module: {
        rules:  [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    },
    mode: "development"
}