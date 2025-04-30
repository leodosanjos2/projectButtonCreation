class App{
    constructor() {
        this.repoBox = [];
        this.lastButton = null;
        this.maxValue;
        this.selectedButton = null;
        this.showCount = document.getElementById('count');
        this.showBlocks = document.getElementById('showBlocks');
        this.itemsList = document.getElementById('itemsList');
        this.addButton = document.getElementById('addbutton');
        this.addButton.addEventListener('click', ()=>this.createBox())
        this.removebutton = document.getElementById('removebutton');
        this.removebutton.addEventListener('click', ()=>this.removeBox())     

    }
    
    removeBox(){
        if (this.repoBox.length !== 0){
            if (!this.selectedButton){
                this.selectedButton = this.repoBox.pop();
                this.selectedButton.remove()
                this.selectedButton = null;
            }else{
                this.repoBox.forEach((btnremove, index) =>{
                    if (btnremove === this.selectedButton){
                        console.log('local '+index)
                        this.repoBox.splice(index, 1, 0)
                        this.selectedButton.remove()
                        this.selectedButton = null;
                    }
                })
                this.repoBox = this.repoBox.filter(element => element !== 0);
            }
            
        }else{
            alert('Não existe box para remover!')
            return;
        }
        this.createShowBox();
    }

    createBox(){
        
        const newButton = document.createElement(`btnPress`);
        
        newButton.id = this.repoBox.length > 0 ? Math.max(...this.repoBox.map(item => item.id)) + 1: 1 ;
        newButton.classList.add('custom-btn');
        newButton.textContent = newButton.id
        this.repoBox.push(newButton);
        this.itemsList.appendChild(newButton);
        this.showBlocks.appendChild(this.itemsList)
        newButton.addEventListener('click', () =>{
            if (this.selectedButton){
                this.selectedButton.style.backgroundColor = '#000000';
                this.selectedButton.style.color = '#ffffff';
                this.selectedButton.classList.remove('selected')
            }
            if (this.selectedButton === newButton){
                newButton.style.backgroundColor = '#000000'
                newButton.style.color = '#ffffff'
                this.selectedButton = null;
                return;
            }
            newButton.style.backgroundColor = '#ffffff'
            newButton.style.color = '#000000'
            newButton.classList.add('selected')
            this.selectedButton = newButton;          
        })
        this.createShowBox();
    }

    createShowBox(){
        if(this.repoBox.length === 0){
            this.showCount.textContent = null    
        }else{
            this.showCount.textContent = `Quantidade de botões criados: ${this.repoBox.length}`
        }
        

    }
}

new App();