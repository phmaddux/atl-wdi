Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/recipes', to: 'recipes#index'

  get '/jokes', to: 'jokes#index'
  get '/jokes/new', to: 'jokes#new'
  get '/jokes/:id', to: 'jokes#show'

end
