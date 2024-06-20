# AI Generate Code - VSCode Extension

AI Generate Code is a Visual Studio Code extension that integrates OpenAI's powerful language models directly into your development environment. This tool allows developers to interact with AI, ask coding questions, and receive code suggestions right within VSCode. Enhance your coding experience by leveraging the power of AI to write code, debug, and learn new technologies.

## Features

- **AI-Powered Code Assistance:** -FUTURE- Get code suggestions and answers to programming queries directly in your editor.
- **Customizable AI Model:** Choose which OpenAI model you want to use based on your needs and preferences.
- **Seamless Integration:** Works within VSCode without the need for switching between applications or windows.

## Prerequisites

Before you install and use the AI Generate Code extension, make sure you have the following:

- Visual Studio Code (latest version recommended)
- An active internet connection
- An OpenAI API key (see below for instructions on how to obtain one)

## Installation

1. Open Visual Studio Code.
2. Navigate to the Extensions view by clicking on the square icon on the sidebar or pressing `Ctrl+Shift+X`.
3. Search for `AI Generate Code`.
4. Click on `Install` to install the extension.

## Obtaining an OpenAI API Key

To interact with OpenAI's models, you need an API key. Here's how you can obtain one:

1. Visit [OpenAI's API platform](https://platform.openai.com/signup).
2. Sign up or log in to create an account.
3. Once logged in, navigate to the API section and click on `Create new API key`.
4. Follow the prompts to generate a new API key. Make sure to copy and securely store your API key as it will not be shown again.

## Configuration

After installation and obtaining your API key, configure the extension by setting up the API key and choosing your preferred GPT model.

### Setting Up the API Key

1. Open VSCode and go to `File > Preferences > Settings` (or press `Ctrl+,`).
2. Search for `ai-generate-code`.
3. Find the `ai-generate-code.apiKey` setting.
4. Enter your OpenAI API key in the text box and save the changes.

### Setting Up the GPT Model

1. In the same settings page (`File > Preferences > Settings`), find or add the `ai-generate-code.model` setting.
2. (Optional) Enter the model ID you wish to use (e.g., `text-davinci-003`, `code-davinci-002`). Refer to OpenAI's documentation for available models. If you don't specify a model, the default model (`gpt-3.5-turbo`) will be used.
3. Save the changes.

## Usage

Once the extension is installed and configured:

1. Select AI-Generate-Code from the VSCode sidebar.
2. Click on the input box to start interacting with the AI model, use the following commands for interact better with AI:

- `/help` - To ask AI model to help with a bug or with any throuble you have.
- `/generate` - To ask AI model to generate code for you. In terms, you will be passing a feature to AI model and it will generate the code according to the feature you asked.
- To use none prompts, just type what you want and the AI model will answer you.

## Support

For support, feature requests, or bug reporting, please visit the [GitHub repository](https://github.com/your-github-repo/ai-generate-code) and open an issue or contact me on my [Linkedin Page](https://www.linkedin.com/in/gersonrp/).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
