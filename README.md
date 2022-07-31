# dotfiles by Björn Benouarets

## Installation
```bash
sudo apt-get install zsh git curl -y

# If you have oh-my-zsh already installed:
sudo rm -R ~/.oh-my-zsh

sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

git clone https://github.com/zsh-users/zsh-autosuggestions.git $ZSH_CUSTOM/plugins/zsh-autosuggestions

git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting

cp zsh/fonts/MesloLGMDZ_NF.ttf ~/.local/share/fonts
fc-cache -f -v

cp zsh/.zshrc ~/
source ~/.zshrc
```

### ZSH Theme
In my setup I use `agnoster` as theme for zsh. My terminal is the normal GNOME Terminal or Windows Terminal.
The font which I use for my terminal is the `Source Code Pro for Powerline`. 

### ZSH Fonts
- Meslo LGMDZ NF

### ZSH Plugins
- git
- sudo
- vscode
- 1password
- cp
- gh
- docker
- docker-compose
- yarn
- npm
- nvm
- kubectl
- helm
- ansible
- zsh-autosuggestions
- zsh-syntax-highlighting
- python
