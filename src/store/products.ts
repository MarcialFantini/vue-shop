import { defineStore } from "pinia";
import { GameInterface } from "../interfaces";

interface interfacesStore {
  games: GameInterface[];
  data: GameInterface[];
  page: number;
  cantPage: number;
  theme: boolean;
}

export const useGameStore = defineStore("games", {
  state: (): interfacesStore => {
    return {
      games: [],
      data: [],
      page: 0,
      cantPage: 0,
      theme: true,
    };
  },
  actions: {
    async getData() {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "ef9a74b3e4msh77d1b851c5da5f3p1c32eajsnc06e8eec8176",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      };

      const res = await fetch(
        "https://free-to-play-games-database.p.rapidapi.com/api/games",
        options
      );
      const data = await res.json();

      this.games = data;
      this.data = data.slice(0, 19);
      this.cantPage = Math.round(this.games.length / 20);
    },

    plus() {
      if (this.page + 1 < this.cantPage) {
        this.page = this.page + 1;
        let newData = [...this.games];
        let pagination = this.page * 20;
        const page = newData.slice(pagination, pagination + 20);

        this.data = [...page];
      }
    },
    decrement() {
      if (this.page - 1 > 0) {
        this.page--;
        let newData = [...this.games];
        let pagination = this.page * 20;
        const page = newData.slice(pagination - 20, pagination);
        this.data = [...page];
      }
    },
    returnList(start: number) {
      const data = this.games.slice(start, 5);
      return data;
    },
    toggleTheme() {
      this.theme = !this.theme;
    },
  },
});
