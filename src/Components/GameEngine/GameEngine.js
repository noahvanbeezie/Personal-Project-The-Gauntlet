import React from 'react'

class Combat extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            floor:1,
            score:0,

            health:0,
            attack1name:'',
            attack1damage:0,
            attack1type:'',
            attack2name:'',
            attack2damage:0,
            attack2type:'',
            playerDead:false,

            level:1,
            currentXp:0,
            xpToLevel:10,
            levelUp:false,

            
            combatLog:[],
            turn:0,
            monsterAttackDamage:0,
            
            monsterName:'Test',
            monsterClass:'',
            monsterHealth:40,
            monsterDefense:0,
            monsterAttack1name:'TestAttack1',
            monsterAttack1damage:0,
            monsterAttack2name:'TestAttack2',
            monsterAttack2damage:0,
            monsterWeaknesses:'',
            monsterResistances:'',
            monsterScoreReward:0,
            monsterXPReward:0,
            monsterDead:false,

        }
    }

    componentDidMount(){
        this.setState({health:this.props.health, attack1name:this.props.attack1name, attack1damage:this.props.attack1damage, attack1type:this.props.attack1type, 
        attack2name:this.props.attack2name, attack2damage:this.props.attack2damage, attack2type:this.props.attack1type,})
    }

    attack1action = () => {
        if(this.state.attack1type === this.state.monsterWeaknesses){
            let damage = this.state.attack1damage * 1.5
            let monsterHealth = this.state.monsterHealth
            let afterAttackHealth = monsterHealth - damage
            this.setState({monsterHealth:afterAttackHealth})
            this.setState({combatLog:[...this.state.combatLog, `${this.state.attack1name} for ${damage} damage!` ]})
        }else if(this.state.attack1type === this.state.monsterResistances){
            let damage = this.state.attack1damage * 0.5
            let monsterHealth = this.state.monsterHealth
            let afterAttackHealth = monsterHealth - damage
            this.setState({monsterHealth:afterAttackHealth})
            this.setState({combatLog:[...this.state.combatLog, `${this.state.attack1name} for ${damage} damage!` ]})
        }else{
            let damage = this.state.attack1damage
            let monsterHealth = this.state.monsterHealth
            let afterAttackHealth = monsterHealth - damage
            this.setState({monsterHealth:afterAttackHealth})
            this.setState({combatLog:[...this.state.combatLog, `${this.state.attack1name} for ${damage} damage!` ]})
        }
    }
    attack2action = () => {
        if(this.state.attack2type === this.state.monsterWeaknesses){
            let damage = this.state.attack2damage * 1.5
            let monsterHealth = this.state.monsterHealth
            let afterAttackHealth = monsterHealth - damage
            this.setState({monsterHealth:afterAttackHealth})
            this.setState({combatLog:[...this.state.combatLog, `${this.state.attack2name} for ${damage} damage!` ]})
        }else if(this.state.attack2type === this.state.monsterResistances){
            let damage = this.state.attack2damage * 0.5
            let monsterHealth = this.state.monsterHealth
            let afterAttackHealth = monsterHealth - damage
            this.setState({monsterHealth:afterAttackHealth})
            this.setState({combatLog:[...this.state.combatLog, `${this.state.attack2name} for ${damage} damage!` ]})
        }else{
            let damage = this.state.attack2damage
            let monsterHealth = this.state.monsterHealth
            let afterAttackHealth = monsterHealth - damage
            this.setState({monsterHealth:afterAttackHealth})
            this.setState({combatLog:[...this.state.combatLog, `${this.state.attack2name} for ${damage} damage!` ]})
        }
    }

    render(){
        return(
            <div>
                <div>
                    <h2>Floor:{this.state.floor}</h2>
                    <h2>Score:{this.state.score}</h2>
                </div>
                <div>
                    <p>Health:{this.state.health}</p>
                    <p>Level:{this.state.level}</p>
                </div>
                <div>
                    <h2>{this.state.monsterName}</h2>
                    <p>Health:{this.state.monsterHealth}</p>
                    <div>
                        <h2>Monster Attacks:</h2>
                        <p>{this.state.monsterAttack1name}</p>
                        <p>{this.state.monsterAttack2name}</p>
        

                    </div>
                </div>
                <div className='attacks'>
                    <h2>{this.state.attack1name}</h2>
                    <p>Damage:{this.state.attack1damage}</p>
                    <p>Type:{this.state.attack1type}</p>
                    <button onClick={this.attack1action}>Attack</button>
                </div>
                <div className='attacks'>
                    <h2>{this.state.attack2name}</h2>
                    <p>Damage:{this.state.attack2damage}</p>
                    <p>Type:{this.state.attack2type}</p>
                    <button onClick={this.attack2action}>Attack</button>
                </div>
                <div>
                    <h2>Combat Log:</h2>
                    {this.state.combatLog}
                    
                
                
            </div>
        </div>
        )
    }

}

export default Combat