Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :pages do
        get 'feed', on: :member
      end
    end
  end

  get '/(*path)' => 'root#index', as: :root, format: :html
end
