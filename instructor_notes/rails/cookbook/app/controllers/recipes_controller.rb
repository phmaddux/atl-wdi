class RecipesController < ApplicationController

    def index
        @recipes = Recipe.all
        @new_info = "Hello World from recipes_controller"
        # <%%> does Ruby but wont render on the page
        # example: is in /recipes or recipes#index
        
        # <% 5.times do |x| %>
        #     <p>I was created by Ruby</p>
        # <% end %>

    end

end