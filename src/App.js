'user stric';
import React from 'react';

// Renderizando componentes utilizando Classes
class App extends React.Component {

	render() {
		return (
			<div className='app'>
			<div className='search'>
				<input 
					type='search' 
					placeholder="Digite o nome do usuário no Github"
				/>
			</div>
				<div className='user-info'>
					<img src='https://avatars1.githubusercontent.com/u/16245261?v=4' />
					<h1>
						<a href="https://github.com/daniel-silva-dxp">
							Daniel Silva
						</a>
					</h1>
					<ul className="repos-info">
						<li>Repositórios: 41</li>
						<li>Seguidores: 4</li>
						<li>Seguindo: 15</li>
					</ul>
					<div className='actions'>
						<button>Ver repositórios</button>
						<button>Ver favoritos</button>
					</div>
					<div className="repos">
						<h2>Repositórios:</h2>
						<ul>
							<li>
								<a href='#'>
									Nome do repositório
								</a>
							</li>
						</ul>
					</div>
					<div className="starred">
						<h2>Favoritos:</h2>
						<ul>
							<li>
								<a href='#'>
									Nome do repositório
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
