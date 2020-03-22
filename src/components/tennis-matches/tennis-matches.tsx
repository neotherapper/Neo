import { Component, ComponentInterface, Host, h } from '@stencil/core';
import { TennisMatchI } from '../tennis-match/tennis-match.model';

@Component({
  tag: "tennis-matches",
  styleUrl: "tennis-matches.css",
  shadow: true
})
export class TennisMatches implements ComponentInterface {
  matches: TennisMatchI[] = [
    {
      id: "SM064",
      url: "/en-us/matches/SM064",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court Philippe-Chatrier",
        durationInMinutes: 96,
        endTimestamp: 1578322500000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Novak",
            lastName: "DJOKOVIC",
            shortName: "N.DJOKOVIC",
            ranking: 1,
            rankingDouble: 139,
            country: "SRB",
            sex: "M",
            playerCardUrl: "/en-us/players/9801-n.djokovic",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/f68d31a6cab4148d2740fbb6f860a096dd663b91_djokovic.png?auto=compress,format" title="DJOKOVIC">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/f68d31a6cab4148d2740fbb6f860a096dd663b91_djokovic.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: 1,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Hubert",
            lastName: "HURKACZ",
            shortName: "H.HURKACZ",
            ranking: 29,
            rankingDouble: 229,
            country: "POL",
            sex: "M",
            playerCardUrl: "/en-us/players/31976-h.hurkacz",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/0c1496c23699153f8339efa97392f4399869dcc8_hurkacz.png?auto=compress,format" title="HURKACZ">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/0c1496c23699153f8339efa97392f4399869dcc8_hurkacz.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM065",
      url: "/en-us/matches/SM065",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 5",
        durationInMinutes: 125,
        endTimestamp: 1578322174000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Henri",
            lastName: "LAAKSONEN",
            shortName: "H.LAAKSONEN",
            ranking: 137,
            rankingDouble: null,
            country: "SUI",
            sex: "M",
            playerCardUrl: "/en-us/players/19041-h.laaksonen",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/5effde2b887bc981d93328f77cd92b03e710acf2_laaksonen.png?auto=compress,format" title="LAAKSONEN">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/5effde2b887bc981d93328f77cd92b03e710acf2_laaksonen.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: 7,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: "L"
      },
      teamB: {
        players: [
          {
            firstName: "Pedro",
            lastName: "MARTINEZ",
            shortName: "P.MARTINEZ",
            ranking: 106,
            rankingDouble: 177,
            country: "ESP",
            sex: "M",
            playerCardUrl: "/en-us/players/32244-p.martinez",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/af1b0cf1cc4cb27d1e059902c2b93cff0d7648b4_martinez.png?auto=compress,format" title="MARTINEZ">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/af1b0cf1cc4cb27d1e059902c2b93cff0d7648b4_martinez.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 1,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 0,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: 4,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: "Q"
      }
    },
    {
      id: "SM066",
      url: "/en-us/matches/SM066",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 4",
        durationInMinutes: 185,
        endTimestamp: 1578323208000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Jaume",
            lastName: "MUNAR",
            shortName: "J.MUNAR",
            ranking: 105,
            rankingDouble: 162,
            country: "ESP",
            sex: "M",
            playerCardUrl: "/en-us/players/33529-j.munar",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/377e430be147d9aa0cf54ba6716a9c0382954e56_munar.png?auto=compress,format" title="MUNAR">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/377e430be147d9aa0cf54ba6716a9c0382954e56_munar.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 5,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Salvatore",
            lastName: "CARUSO",
            shortName: "S.CARUSO",
            ranking: 100,
            rankingDouble: 167,
            country: "ITA",
            sex: "M",
            playerCardUrl: "/en-us/players/24574-s.caruso",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/d7f176fb30473658f469fbf2631f45a329a942b8_caruso.png?auto=compress,format" title="CARUSO">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/d7f176fb30473658f469fbf2631f45a329a942b8_caruso.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 7,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: "Q"
      }
    },
    {
      id: "SM067",
      url: "/en-us/matches/SM067",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 7",
        durationInMinutes: 123,
        endTimestamp: 1578322443000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Sergiy",
            lastName: "STAKHOVSKY",
            shortName: "S.STAKHOVSKY",
            ranking: 167,
            rankingDouble: 176,
            country: "UKR",
            sex: "M",
            playerCardUrl: "/en-us/players/8070-s.stakhovsky",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/5b750fa96d75ec13d21849a0484109ce369fb92b_stakhovsky.png?auto=compress,format" title="STAKHOVSKY">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/5b750fa96d75ec13d21849a0484109ce369fb92b_stakhovsky.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: "L"
      },
      teamB: {
        players: [
          {
            firstName: "Gilles",
            lastName: "SIMON",
            shortName: "G.SIMON",
            ranking: 54,
            rankingDouble: 341,
            country: "FRA",
            sex: "M",
            playerCardUrl: "/en-us/players/7774-g.simon",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/cfe9cbfda24d02a60b7917e990dff9fa3dd827f6_gilles-simon.jpg?auto=compress,format" title="SIMON">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/cfe9cbfda24d02a60b7917e990dff9fa3dd827f6_gilles-simon.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: 26,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM068",
      url: "/en-us/matches/SM068",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 7",
        durationInMinutes: 130,
        endTimestamp: 1578323532000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Denis",
            lastName: "SHAPOVALOV",
            shortName: "D.SHAPOVALOV",
            ranking: 16,
            rankingDouble: 44,
            country: "CAN",
            sex: "M",
            playerCardUrl: "/en-us/players/35246-d.shapovalov",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/8c2d95c9cb6e8ac281e3eacc7ad5fb6cb004678d_denis-shapovalov.jpg?auto=compress,format" title="SHAPOVALOV">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/8c2d95c9cb6e8ac281e3eacc7ad5fb6cb004678d_denis-shapovalov.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: 1,
            winner: false,
            inProgress: false
          },
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: 20,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Jan-Lennard",
            lastName: "STRUFF",
            shortName: "JL.STRUFF",
            ranking: 34,
            rankingDouble: 46,
            country: "GER",
            sex: "M",
            playerCardUrl: "/en-us/players/23386-jl.struff",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/2733bef16e7b393bc772a274822b46126b8c8dea_struff.png?auto=compress,format" title="STRUFF">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/2733bef16e7b393bc772a274822b46126b8c8dea_struff.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 7,
            tieBreak: 7,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM069",
      url: "/en-us/matches/SM069",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 8",
        durationInMinutes: 177,
        endTimestamp: 1578323572000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Radu",
            lastName: "ALBOT",
            shortName: "R.ALBOT",
            ranking: 67,
            rankingDouble: 136,
            country: "MDA",
            sex: "M",
            playerCardUrl: "/en-us/players/17497-r.albot",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/435371ac7a989bcb42032e0eebfc22326521b170_radu-albot.jpg?auto=compress,format" title="ALBOT">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/435371ac7a989bcb42032e0eebfc22326521b170_radu-albot.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 7,
            tieBreak: 7,
            winner: true,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: 7,
            winner: true,
            inProgress: false
          },
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Tennys",
            lastName: "SANDGREN",
            shortName: "T.SANDGREN",
            ranking: 55,
            rankingDouble: 211,
            country: "USA",
            sex: "M",
            playerCardUrl: "/en-us/players/21707-t.sandgren",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/a1bb31ddf34af3c052f164314a46d550bbae04cc_sandgren.png?auto=compress,format" title="SANDGREN">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/a1bb31ddf34af3c052f164314a46d550bbae04cc_sandgren.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: 3,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: 1,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 1,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: "Q"
      }
    },
    {
      id: "SM070",
      url: "/en-us/matches/SM070",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 10",
        durationInMinutes: 149,
        endTimestamp: 1578323108000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Lloyd",
            lastName: "HARRIS",
            shortName: "L.HARRIS",
            ranking: 98,
            rankingDouble: null,
            country: "RSA",
            sex: "M",
            playerCardUrl: "/en-us/players/33462-l.harris",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/4749ebae4f06d362c6931ab4bd8ab5d61c56ba96_harris.png?auto=compress,format" title="HARRIS">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/4749ebae4f06d362c6931ab4bd8ab5d61c56ba96_harris.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Lukas",
            lastName: "ROSOL",
            shortName: "L.ROSOL",
            ranking: 179,
            rankingDouble: null,
            country: "CZE",
            sex: "M",
            playerCardUrl: "/en-us/players/8847-l.rosol",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/10b2f440ee5239a4beef7a305c3450299e715652_rosol.png?auto=compress,format" title="ROSOL">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/10b2f440ee5239a4beef7a305c3450299e715652_rosol.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 1,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 1,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: "L"
      }
    },
    {
      id: "SM071",
      url: "/en-us/matches/SM071",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 1",
        durationInMinutes: 171,
        endTimestamp: 1578322284000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Aljaz",
            lastName: "BEDENE",
            shortName: "A.BEDENE",
            ranking: 61,
            rankingDouble: null,
            country: "SLO",
            sex: "M",
            playerCardUrl: "/en-us/players/19666-a.bedene",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/b82ccf764e574098d3b1fc84b5f2424ab5fc9695_bedene.png?auto=compress,format" title="BEDENE">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/b82ccf764e574098d3b1fc84b5f2424ab5fc9695_bedene.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 1,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: 7,
            winner: true,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Borna",
            lastName: "CORIC",
            shortName: "B.CORIC",
            ranking: 33,
            rankingDouble: null,
            country: "CRO",
            sex: "M",
            playerCardUrl: "/en-us/players/29171-b.coric",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/f1a4ef802ee24ede20d91a131fc4d41f83005f6a_borna-coric.jpg?auto=compress,format" title="CORIC">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/f1a4ef802ee24ede20d91a131fc4d41f83005f6a_borna-coric.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: 4,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: 13,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM072",
      url: "/en-us/matches/SM072",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court Simonne-Mathieu",
        durationInMinutes: 141,
        endTimestamp: 1578327513000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Fabio",
            lastName: "FOGNINI",
            shortName: "F.FOGNINI",
            ranking: 11,
            rankingDouble: 122,
            country: "ITA",
            sex: "M",
            playerCardUrl: "/en-us/players/9852-f.fognini",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/4222b37ac8f423c0653f6a73dcf255883d48341f_fabio-fognini.jpg?auto=compress,format" title="FOGNINI">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/4222b37ac8f423c0653f6a73dcf255883d48341f_fabio-fognini.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: 9,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Andreas",
            lastName: "SEPPI",
            shortName: "A.SEPPI",
            ranking: 88,
            rankingDouble: 461,
            country: "ITA",
            sex: "M",
            playerCardUrl: "/en-us/players/7688-a.seppi",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/7be1ca03f3659dabb13de3bd6148a6ddcca0af20_andreas-seppi.jpg?auto=compress,format" title="SEPPI">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/7be1ca03f3659dabb13de3bd6148a6ddcca0af20_andreas-seppi.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 0,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM073",
      url: "/en-us/matches/SM073",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 9",
        durationInMinutes: 156,
        endTimestamp: 1578327633000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Guillermo",
            lastName: "GARCIA-LOPEZ",
            shortName: "G.GARCIA-LOPEZ",
            ranking: 201,
            rankingDouble: 304,
            country: "ESP",
            sex: "M",
            playerCardUrl: "/en-us/players/7399-g.garcia-lopez",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/8bf13d9258a3f7cc44f1b996afb6f6f02fbc1cd6_guillermo-garcia-lopez.jpg?auto=compress,format" title="GARCIA-LOPEZ">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/8bf13d9258a3f7cc44f1b996afb6f6f02fbc1cd6_guillermo-garcia-lopez.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 1,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: "Q"
      },
      teamB: {
        players: [
          {
            firstName: "Federico",
            lastName: "DELBONIS",
            shortName: "F.DELBONIS",
            ranking: 78,
            rankingDouble: 149,
            country: "ARG",
            sex: "M",
            playerCardUrl: "/en-us/players/20304-f.delbonis",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/abd407b492711a34062cff71438f6afc8923d9ae_federico-delbonis.jpg?auto=compress,format" title="DELBONIS">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/abd407b492711a34062cff71438f6afc8923d9ae_federico-delbonis.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM074",
      url: "/en-us/matches/SM074",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 14",
        durationInMinutes: 82,
        endTimestamp: 1578327033000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Taylor",
            lastName: "FRITZ",
            shortName: "T.FRITZ",
            ranking: 24,
            rankingDouble: 123,
            country: "USA",
            sex: "M",
            playerCardUrl: "/en-us/players/34350-t.fritz",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/8d519e513edd549a56ad3cf3bd913272b30bf17f_fritz.png?auto=compress,format" title="FRITZ">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/8d519e513edd549a56ad3cf3bd913272b30bf17f_fritz.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Bernard",
            lastName: "TOMIC",
            shortName: "B.TOMIC",
            ranking: 200,
            rankingDouble: null,
            country: "AUS",
            sex: "M",
            playerCardUrl: "/en-us/players/17690-b.tomic",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/280e17273f0ab3e6c9ffee0a04bec763f89fecc6_bernard-tomic.jpg?auto=compress,format" title="TOMIC">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/280e17273f0ab3e6c9ffee0a04bec763f89fecc6_bernard-tomic.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 1,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 1,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM075",
      url: "/en-us/matches/SM075",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 1",
        durationInMinutes: 102,
        endTimestamp: 1578328309000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Steve",
            lastName: "JOHNSON",
            shortName: "S.JOHNSON",
            ranking: 63,
            rankingDouble: 203,
            country: "USA",
            sex: "M",
            playerCardUrl: "/en-us/players/18972-s.johnson",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/f05b4683a1ccf53bc226aa8fe5ea61741bba86c9_steve-johnson.jpg?auto=compress,format" title="JOHNSON">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/f05b4683a1ccf53bc226aa8fe5ea61741bba86c9_steve-johnson.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Roberto",
            lastName: "BAUTISTA AGUT",
            shortName: "R.BAUTISTA AGUT",
            ranking: 12,
            rankingDouble: null,
            country: "ESP",
            sex: "M",
            playerCardUrl: "/en-us/players/13354-r.bautista agut",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/0c53ff68b208f7d05679069f2843ae21e73dc25f_roberto-bautista-agut.jpg?auto=compress,format" title="BAUTISTA AGUT">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/0c53ff68b208f7d05679069f2843ae21e73dc25f_roberto-bautista-agut.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: 18,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM076",
      url: "/en-us/matches/SM076",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 11",
        durationInMinutes: 125,
        endTimestamp: 1578328204000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Dusan",
            lastName: "LAJOVIC",
            shortName: "D.LAJOVIC",
            ranking: 23,
            rankingDouble: 102,
            country: "SRB",
            sex: "M",
            playerCardUrl: "/en-us/players/19749-d.lajovic",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/aa5ede5d9b9d1bb256ca438218d00909e2c47140_dusan-lajovic.jpg?auto=compress,format" title="LAJOVIC">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/aa5ede5d9b9d1bb256ca438218d00909e2c47140_dusan-lajovic.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: 30,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Thiago",
            lastName: "MONTEIRO",
            shortName: "T.MONTEIRO",
            ranking: 82,
            rankingDouble: 212,
            country: "BRA",
            sex: "M",
            playerCardUrl: "/en-us/players/22991-t.monteiro",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/229d33049d4900b15f3741713986e18385fc3010_monteiro.png?auto=compress,format" title="MONTEIRO">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/229d33049d4900b15f3741713986e18385fc3010_monteiro.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: "Q"
      }
    },
    {
      id: "SM077",
      url: "/en-us/matches/SM077",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 7",
        durationInMinutes: 84,
        endTimestamp: 1578327093000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Cameron",
            lastName: "NORRIE",
            shortName: "C.NORRIE",
            ranking: 77,
            rankingDouble: 208,
            country: "GBR",
            sex: "M",
            playerCardUrl: "/en-us/players/28593-c.norrie",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/e3b8d66dcd2343196d80baa183a0f84b6e6332a7_norrie.png?auto=compress,format" title="NORRIE">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/e3b8d66dcd2343196d80baa183a0f84b6e6332a7_norrie.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 0,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Elliot",
            lastName: "BENCHETRIT",
            shortName: "E.BENCHETRIT",
            ranking: 207,
            rankingDouble: 270,
            country: "FRA",
            sex: "M",
            playerCardUrl: "/en-us/players/36744-e.benchetrit",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/ff9f99b772e2caf51c77e1cdcf3b82ba53412bf9_benchetrit.png?auto=compress,format" title="BENCHETRIT">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/ff9f99b772e2caf51c77e1cdcf3b82ba53412bf9_benchetrit.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: "Q"
      }
    },
    {
      id: "SM078",
      url: "/en-us/matches/SM078",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 13",
        durationInMinutes: 125,
        endTimestamp: 1578327414000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Mikael",
            lastName: "YMER",
            shortName: "M.YMER",
            ranking: 68,
            rankingDouble: null,
            country: "SWE",
            sex: "M",
            playerCardUrl: "/en-us/players/33597-m.ymer",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/67c79aba9f176713c5d5e71c47b34a43fecf0e7a_ymer.png?auto=compress,format" title="YMER">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/67c79aba9f176713c5d5e71c47b34a43fecf0e7a_ymer.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: 7,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: "Q"
      },
      teamB: {
        players: [
          {
            firstName: "Blaz",
            lastName: "ROLA",
            shortName: "B.ROLA",
            ranking: 141,
            rankingDouble: 387,
            country: "SLO",
            sex: "M",
            playerCardUrl: "/en-us/players/21702-b.rola",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/ab43387a1ed669dc3856c3b8ab24c3990fa2f033_rola.png?auto=compress,format" title="ROLA">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/ab43387a1ed669dc3856c3b8ab24c3990fa2f033_rola.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 0,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: 5,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: "Q"
      }
    },
    {
      id: "SM079",
      url: "/en-us/matches/SM079",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court Philippe-Chatrier",
        durationInMinutes: 248,
        endTimestamp: 1578328598000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "John",
            lastName: "MILLMAN",
            shortName: "J.MILLMAN",
            ranking: 43,
            rankingDouble: null,
            country: "AUS",
            sex: "M",
            playerCardUrl: "/en-us/players/19769-j.millman",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/b07ae549aa3bcbda985c67901a7319541d805e3f_john-millman.jpg?auto=compress,format" title="MILLMAN">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/b07ae549aa3bcbda985c67901a7319541d805e3f_john-millman.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: 4,
            winner: false,
            inProgress: false
          },
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: 7,
            winner: true,
            inProgress: false
          },
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Alexander",
            lastName: "ZVEREV",
            shortName: "A.ZVEREV",
            ranking: 7,
            rankingDouble: 161,
            country: "GER",
            sex: "M",
            playerCardUrl: "/en-us/players/30350-a.zverev",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/56e341fe7e1f5d42c451074337b84d84c304fa3c_zverev.png?auto=compress,format" title="ZVEREV">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/56e341fe7e1f5d42c451074337b84d84c304fa3c_zverev.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 7,
            tieBreak: 7,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: 5,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: 5,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM080",
      url: "/en-us/matches/SM080",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court Suzanne-Lenglen",
        durationInMinutes: 151,
        endTimestamp: 1578323720000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Dominic",
            lastName: "THIEM",
            shortName: "D.THIEM",
            ranking: 3,
            rankingDouble: 96,
            country: "AUT",
            sex: "M",
            playerCardUrl: "/en-us/players/26348-d.thiem",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/4249ac18c3e2f4b264feae288f6e9f20bfdb6ca5_thiem.png?auto=compress,format" title="THIEM">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/4249ac18c3e2f4b264feae288f6e9f20bfdb6ca5_thiem.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: 7,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: 4,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Tommy",
            lastName: "PAUL",
            shortName: "T.PAUL",
            ranking: 57,
            rankingDouble: 401,
            country: "USA",
            sex: "M",
            playerCardUrl: "/en-us/players/33541-t.paul",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/99b434db6fb05166b22c29272d03ed57394d13de_paul.png?auto=compress,format" title="PAUL">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/99b434db6fb05166b22c29272d03ed57394d13de_paul.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: 5,
            winner: false,
            inProgress: false
          },
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: "W"
      }
    },
    {
      id: "SM081",
      url: "/en-us/matches/SM081",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 13",
        durationInMinutes: 154,
        endTimestamp: 1578323498000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Rudolf",
            lastName: "MOLLEKER",
            shortName: "R.MOLLEKER",
            ranking: 188,
            rankingDouble: null,
            country: "GER",
            sex: "M",
            playerCardUrl: "/en-us/players/38488-r.molleker",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/f7e9b5d9dc79be98bb44f0722c566ccb637cd212_molleker.png?auto=compress,format" title="MOLLEKER">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/f7e9b5d9dc79be98bb44f0722c566ccb637cd212_molleker.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 5,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: 7,
            winner: true,
            inProgress: false
          },
          {
            score: 1,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: 2,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: "Q"
      },
      teamB: {
        players: [
          {
            firstName: "Alexander",
            lastName: "BUBLIK",
            shortName: "A.BUBLIK",
            ranking: 51,
            rankingDouble: 100,
            country: "KAZ",
            sex: "M",
            playerCardUrl: "/en-us/players/29098-a.bublik",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/3822f9b371d6748b6a2ad619306c9854251ba630_bublik.png?auto=compress,format" title="BUBLIK">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/3822f9b371d6748b6a2ad619306c9854251ba630_bublik.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 7,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: 4,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: 7,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM082",
      url: "/en-us/matches/SM082",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 6",
        durationInMinutes: 94,
        endTimestamp: 1578323262000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Maxime",
            lastName: "JANVIER",
            shortName: "M.JANVIER",
            ranking: 190,
            rankingDouble: null,
            country: "FRA",
            sex: "M",
            playerCardUrl: "/en-us/players/31054-m.janvier",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/afa72bc765d0a4b89c5db5e76ff40c0e65359fc9_janvier.png?auto=compress,format" title="JANVIER">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/afa72bc765d0a4b89c5db5e76ff40c0e65359fc9_janvier.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: "W"
      },
      teamB: {
        players: [
          {
            firstName: "Pablo",
            lastName: "CUEVAS",
            shortName: "P.CUEVAS",
            ranking: 60,
            rankingDouble: 111,
            country: "URU",
            sex: "M",
            playerCardUrl: "/en-us/players/9767-p.cuevas",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/08aae3faf370e5d87ef18929a809955446d41bff_pablo-cuevas.jpg?auto=compress,format" title="CUEVAS">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/08aae3faf370e5d87ef18929a809955446d41bff_pablo-cuevas.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM083",
      url: "/en-us/matches/SM083",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 1",
        durationInMinutes: 242,
        endTimestamp: 1578327137000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Jeremy",
            lastName: "CHARDY",
            shortName: "J.CHARDY",
            ranking: 59,
            rankingDouble: 34,
            country: "FRA",
            sex: "M",
            playerCardUrl: "/en-us/players/11493-j.chardy",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/484fc351523913b45e86fe58d3038fbc0d2ce1f2_jeremy-chardy.jpg?auto=compress,format" title="CHARDY">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/484fc351523913b45e86fe58d3038fbc0d2ce1f2_jeremy-chardy.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: 1,
            winner: false,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 5,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Kyle",
            lastName: "EDMUND",
            shortName: "K.EDMUND",
            ranking: 44,
            rankingDouble: 160,
            country: "GBR",
            sex: "M",
            playerCardUrl: "/en-us/players/28522-k.edmund",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/5be07446e9af11de24556f33adfd35f6d738a1cc_kyle-edmund.jpg?auto=compress,format" title="EDMUND">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/5be07446e9af11de24556f33adfd35f6d738a1cc_kyle-edmund.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 7,
            tieBreak: 7,
            winner: true,
            inProgress: false
          },
          {
            score: 5,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: 28,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM084",
      url: "/en-us/matches/SM084",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 7",
        durationInMinutes: 205,
        endTimestamp: 1578330065000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Fernando",
            lastName: "VERDASCO",
            shortName: "F.VERDASCO",
            ranking: 52,
            rankingDouble: 457,
            country: "ESP",
            sex: "M",
            playerCardUrl: "/en-us/players/5085-f.verdasco",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/7090356aabd7b46f6e294ab7a06036023126e96d_fernando-verdasco.jpg?auto=compress,format" title="VERDASCO">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/7090356aabd7b46f6e294ab7a06036023126e96d_fernando-verdasco.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: 4,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: 23,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Daniel",
            lastName: "EVANS",
            shortName: "D.EVANS",
            ranking: 28,
            rankingDouble: 152,
            country: "GBR",
            sex: "M",
            playerCardUrl: "/en-us/players/15645-d.evans",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/bc4728458f41d9ec9a6d04cb714614445e51bb6c_evans.png?auto=compress,format" title="EVANS">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/bc4728458f41d9ec9a6d04cb714614445e51bb6c_evans.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: 7,
            winner: true,
            inProgress: false
          },
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM085",
      url: "/en-us/matches/SM085",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 6",
        durationInMinutes: 179,
        endTimestamp: 1578330316000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Antoine",
            lastName: "HOANG",
            shortName: "A.HOANG",
            ranking: 136,
            rankingDouble: 236,
            country: "FRA",
            sex: "M",
            playerCardUrl: "/en-us/players/27071-a.hoang",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/c8ed001f610a01320b9dcfbc84494dce604ef405_hoang.png?auto=compress,format" title="HOANG">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/c8ed001f610a01320b9dcfbc84494dce604ef405_hoang.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 0,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: 7,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: "W"
      },
      teamB: {
        players: [
          {
            firstName: "Damir",
            lastName: "DZUMHUR",
            shortName: "D.DZUMHUR",
            ranking: 107,
            rankingDouble: null,
            country: "BIH",
            sex: "M",
            playerCardUrl: "/en-us/players/20338-d.dzumhur",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/893a181fe4509e27d46df2806646ba75d10af4c0_damir-dzumhur.jpg?auto=compress,format" title="DZUMHUR">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/893a181fe4509e27d46df2806646ba75d10af4c0_damir-dzumhur.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: 5,
            winner: false,
            inProgress: false
          },
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM086",
      url: "/en-us/matches/SM086",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court Simonne-Mathieu",
        durationInMinutes: 224,
        endTimestamp: 1578330527000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Stefano",
            lastName: "TRAVAGLIA",
            shortName: "S.TRAVAGLIA",
            ranking: 86,
            rankingDouble: 362,
            country: "ITA",
            sex: "M",
            playerCardUrl: "/en-us/players/21066-s.travaglia",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/bc3b4b5c8b1f15ebf98d2039eb964e26c9e859f2_travaglia.png?auto=compress,format" title="TRAVAGLIA">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/bc3b4b5c8b1f15ebf98d2039eb964e26c9e859f2_travaglia.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 7,
            tieBreak: 7,
            winner: true,
            inProgress: false
          },
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: "Q"
      },
      teamB: {
        players: [
          {
            firstName: "Adrian",
            lastName: "MANNARINO",
            shortName: "A.MANNARINO",
            ranking: 38,
            rankingDouble: 209,
            country: "FRA",
            sex: "M",
            playerCardUrl: "/en-us/players/13859-a.mannarino",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/d64f5fbd29ced14321b6bc4cfdd32a903d5d31f8_mannarino.png?auto=compress,format" title="MANNARINO">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/d64f5fbd29ced14321b6bc4cfdd32a903d5d31f8_mannarino.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: 5,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM087",
      url: "/en-us/matches/SM087",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court Philippe-Chatrier",
        durationInMinutes: 101,
        endTimestamp: 1578330531000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Taro",
            lastName: "DANIEL",
            shortName: "T.DANIEL",
            ranking: 112,
            rankingDouble: null,
            country: "JPN",
            sex: "M",
            playerCardUrl: "/en-us/players/26227-t.daniel",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/f52815d97d05caf401b92c93b7b13a49d3c5fe03_taro.png?auto=compress,format" title="DANIEL">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/f52815d97d05caf401b92c93b7b13a49d3c5fe03_taro.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 0,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 1,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Gael",
            lastName: "MONFILS",
            shortName: "G.MONFILS",
            ranking: 9,
            rankingDouble: null,
            country: "FRA",
            sex: "M",
            playerCardUrl: "/en-us/players/9525-g.monfils",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/6aaf270a950062b8494b9617db68eba3664afef5_gael-monfils.jpg?auto=compress,format" title="MONFILS">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/6aaf270a950062b8494b9617db68eba3664afef5_gael-monfils.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: 14,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM088",
      url: "/en-us/matches/SM088",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 1",
        durationInMinutes: 97,
        endTimestamp: 1578329271000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Karen",
            lastName: "KHACHANOV",
            shortName: "K.KHACHANOV",
            ranking: 15,
            rankingDouble: 76,
            country: "RUS",
            sex: "M",
            playerCardUrl: "/en-us/players/29528-k.khachanov",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/b205e855fd0ea65958513d8eb9fdc7079592dfc3_khachanov.png?auto=compress,format" title="KHACHANOV">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/b205e855fd0ea65958513d8eb9fdc7079592dfc3_khachanov.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: 10,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Cedrik-Marcel",
            lastName: "STEBE",
            shortName: "CM.STEBE",
            ranking: 133,
            rankingDouble: null,
            country: "GER",
            sex: "M",
            playerCardUrl: "/en-us/players/21721-cm.stebe",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/41c7fb7b558fc50806b55dbdb7946eb71f1d5cc4_cedrik-marcel-stebe.jpg?auto=compress,format" title="STEBE">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/41c7fb7b558fc50806b55dbdb7946eb71f1d5cc4_cedrik-marcel-stebe.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 1,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 1,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM089",
      url: "/en-us/matches/SM089",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 14",
        durationInMinutes: 150,
        endTimestamp: 1578330079000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Gregoire",
            lastName: "BARRERE",
            shortName: "G.BARRERE",
            ranking: 95,
            rankingDouble: 186,
            country: "FRA",
            sex: "M",
            playerCardUrl: "/en-us/players/26197-g.barrere",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/de72102b873988a106d340ebc48778c72042662e_gregoire-barrere.jpg?auto=compress,format" title="BARRERE">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/de72102b873988a106d340ebc48778c72042662e_gregoire-barrere.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 5,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: "W"
      },
      teamB: {
        players: [
          {
            firstName: "Matthew",
            lastName: "EBDEN",
            shortName: "M.EBDEN",
            ranking: 293,
            rankingDouble: 104,
            country: "AUS",
            sex: "M",
            playerCardUrl: "/en-us/players/15624-m.ebden",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/4e6f2757a0058f14d7c5f4a6d0c4d50af0ddc9f3_matthew-ebden.jpg?auto=compress,format" title="EBDEN">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/4e6f2757a0058f14d7c5f4a6d0c4d50af0ddc9f3_matthew-ebden.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 5,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 1,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM090",
      url: "/en-us/matches/SM090",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 13",
        durationInMinutes: 226,
        endTimestamp: 1578330072000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Martin",
            lastName: "KLIZAN",
            shortName: "M.KLIZAN",
            ranking: 159,
            rankingDouble: null,
            country: "SVK",
            sex: "M",
            playerCardUrl: "/en-us/players/15883-m.klizan",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/6b226f065426a08be7f46b2b1eb157792fd92ad9_klizan.png?auto=compress,format" title="KLIZAN">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/6b226f065426a08be7f46b2b1eb157792fd92ad9_klizan.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 5,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Mikhail",
            lastName: "KUKUSHKIN",
            shortName: "M.KUKUSHKIN",
            ranking: 91,
            rankingDouble: 67,
            country: "KAZ",
            sex: "M",
            playerCardUrl: "/en-us/players/15913-m.kukushkin",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/2dcdd2cbcc6e19808537902d47e389c8b25ed0c2_mikhail-kukushkin.jpg?auto=compress,format" title="KUKUSHKIN">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/2dcdd2cbcc6e19808537902d47e389c8b25ed0c2_mikhail-kukushkin.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM091",
      url: "/en-us/matches/SM091",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court Suzanne-Lenglen",
        durationInMinutes: 116,
        endTimestamp: 1578329464000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Simone",
            lastName: "BOLELLI",
            shortName: "S.BOLELLI",
            ranking: 473,
            rankingDouble: 71,
            country: "ITA",
            sex: "M",
            playerCardUrl: "/en-us/players/9677-s.bolelli",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/775584ec79afa4151c49d6bf9126384d7a8c2626_bolelli.png?auto=compress,format" title="BOLELLI">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/775584ec79afa4151c49d6bf9126384d7a8c2626_bolelli.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 5,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: "Q"
      },
      teamB: {
        players: [
          {
            firstName: "Lucas",
            lastName: "POUILLE",
            shortName: "L.POUILLE",
            ranking: 58,
            rankingDouble: 207,
            country: "FRA",
            sex: "M",
            playerCardUrl: "/en-us/players/26325-l.pouille",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/08b6879fee50f01c6942e1682bea83354b99c5ab_pouille.png?auto=compress,format" title="POUILLE">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/08b6879fee50f01c6942e1682bea83354b99c5ab_pouille.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: 22,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM092",
      url: "/en-us/matches/SM092",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 12",
        durationInMinutes: 128,
        endTimestamp: 1578329215000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Alejandro",
            lastName: "DAVIDOVICH FOKINA",
            shortName: "A.DAVIDOVICH FOKINA",
            ranking: 97,
            rankingDouble: 224,
            country: "ESP",
            sex: "M",
            playerCardUrl: "/en-us/players/39036-a.davidovich fokina",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/5bcd7616832900bf28426002d4cfe35bddc2a2e1_davidovich-fokina.png?auto=compress,format" title="DAVIDOVICH FOKINA">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/5bcd7616832900bf28426002d4cfe35bddc2a2e1_davidovich-fokina.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: 3,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: "L"
      },
      teamB: {
        players: [
          {
            firstName: "Jordan",
            lastName: "THOMPSON",
            shortName: "J.THOMPSON",
            ranking: 64,
            rankingDouble: 250,
            country: "AUS",
            sex: "M",
            playerCardUrl: "/en-us/players/28635-j.thompson",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/d2b7fda15df622df57b4e83a58321772f66568d1_thompson.png?auto=compress,format" title="THOMPSON">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/d2b7fda15df622df57b4e83a58321772f66568d1_thompson.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: 7,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM093",
      url: "/en-us/matches/SM093",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 6",
        durationInMinutes: 186,
        endTimestamp: 1578329018000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Ivo",
            lastName: "KARLOVIC",
            shortName: "I.KARLOVIC",
            ranking: 124,
            rankingDouble: null,
            country: "CRO",
            sex: "M",
            playerCardUrl: "/en-us/players/1579-i.karlovic",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/b8d9816bd663ef1c06cc2e6d92508f9df6c17b39_ivo-karlovic.jpg?auto=compress,format" title="KARLOVIC">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/b8d9816bd663ef1c06cc2e6d92508f9df6c17b39_ivo-karlovic.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 7,
            tieBreak: 7,
            winner: true,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: 7,
            winner: false,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Feliciano",
            lastName: "LOPEZ",
            shortName: "F.LOPEZ",
            ranking: 56,
            rankingDouble: 61,
            country: "ESP",
            sex: "M",
            playerCardUrl: "/en-us/players/1834-f.lopez",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/641ece94ec7e5d6773026be2fd5411d79dcdcfe6_feliciano-lopez.jpg?auto=compress,format" title="LOPEZ">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/641ece94ec7e5d6773026be2fd5411d79dcdcfe6_feliciano-lopez.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: 4,
            winner: false,
            inProgress: false
          },
          {
            score: 5,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: 9,
            winner: true,
            inProgress: false
          },
          {
            score: 5,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM094",
      url: "/en-us/matches/SM094",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 10",
        durationInMinutes: 188,
        endTimestamp: 1578328030000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Yoshihito",
            lastName: "NISHIOKA",
            shortName: "Y.NISHIOKA",
            ranking: 48,
            rankingDouble: 452,
            country: "JPN",
            sex: "M",
            playerCardUrl: "/en-us/players/26310-y.nishioka",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/baa46a6a02f81e577299b0bba33f46fb3bfe0321_nishioka.png?auto=compress,format" title="NISHIOKA">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/baa46a6a02f81e577299b0bba33f46fb3bfe0321_nishioka.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: 7,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Mackenzie",
            lastName: "MCDONALD",
            shortName: "M.MCDONALD",
            ranking: 271,
            rankingDouble: 341,
            country: "USA",
            sex: "M",
            playerCardUrl: "/en-us/players/25127-m.mcdonald",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/c74d325931d1b254a1c3479037dc1965c0cd29ac_mcdonald.png?auto=compress,format" title="MCDONALD">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/c74d325931d1b254a1c3479037dc1965c0cd29ac_mcdonald.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 7,
            tieBreak: 9,
            winner: true,
            inProgress: false
          },
          {
            score: 0,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM095",
      url: "/en-us/matches/SM095",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court Suzanne-Lenglen",
        durationInMinutes: 127,
        endTimestamp: 1578327454000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Nicolas",
            lastName: "JARRY",
            shortName: "N.JARRY",
            ranking: 89,
            rankingDouble: 158,
            country: "CHI",
            sex: "M",
            playerCardUrl: "/en-us/players/32019-n.jarry",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/934d09cf01b5758d8ec89a793285933587fce0c1_nicolas-jarry.jpg?auto=compress,format" title="JARRY">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/934d09cf01b5758d8ec89a793285933587fce0c1_nicolas-jarry.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 1,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Juan Martin",
            lastName: "DEL POTRO",
            shortName: "JM.DEL POTRO",
            ranking: 128,
            rankingDouble: 451,
            country: "ARG",
            sex: "M",
            playerCardUrl: "/en-us/players/11713-jm.del potro",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/461d01ce7f9532c20c54ecfdb3f5fbd17c71b484_del-potro.png?auto=compress,format" title="DEL POTRO">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/461d01ce7f9532c20c54ecfdb3f5fbd17c71b484_del-potro.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: 8,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM096",
      url: "/en-us/matches/SM096",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court Philippe-Chatrier",
        durationInMinutes: 108,
        endTimestamp: 1578309933000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Stefanos",
            lastName: "TSITSIPAS",
            shortName: "S.TSITSIPAS",
            ranking: 6,
            rankingDouble: 83,
            country: "GRE",
            sex: "M",
            playerCardUrl: "/en-us/players/35398-s.tsitsipas",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/8ccfed9e7cafaaba20b9f6a2f7146be845999f1a_tsitsipas.png?auto=compress,format" title="TSITSIPAS">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/8ccfed9e7cafaaba20b9f6a2f7146be845999f1a_tsitsipas.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: 7,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: 6,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Maximilian",
            lastName: "MARTERER",
            shortName: "M.MARTERER",
            ranking: 369,
            rankingDouble: null,
            country: "GER",
            sex: "M",
            playerCardUrl: "/en-us/players/29682-m.marterer",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/e1fe5e73decbdafa25f661ea7bde0de3e7bc7a68_maximilian-marterer.jpg?auto=compress,format" title="MARTERER">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/e1fe5e73decbdafa25f661ea7bde0de3e7bc7a68_maximilian-marterer.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: 4,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM097",
      url: "/en-us/matches/SM097",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 13",
        durationInMinutes: 75,
        endTimestamp: 1578310488000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Prajnesh",
            lastName: "GUNNESWARAN",
            shortName: "P.GUNNESWARAN",
            ranking: 132,
            rankingDouble: null,
            country: "IND",
            sex: "M",
            playerCardUrl: "/en-us/players/17569-p.gunneswaran",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/602ff31f2c359261a74445b1b9da041946c0e0f8_gunneswaran.png?auto=compress,format" title="GUNNESWARAN">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/602ff31f2c359261a74445b1b9da041946c0e0f8_gunneswaran.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 1,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 1,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Hugo",
            lastName: "DELLIEN",
            shortName: "H.DELLIEN",
            ranking: 94,
            rankingDouble: 275,
            country: "BOL",
            sex: "M",
            playerCardUrl: "/en-us/players/24660-h.dellien",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/1815977177e1821dd2e487addb1220958cdeba98_dellien.png?auto=compress,format" title="DELLIEN">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/1815977177e1821dd2e487addb1220958cdeba98_dellien.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM098",
      url: "/en-us/matches/SM098",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 8",
        durationInMinutes: 114,
        endTimestamp: 1578320998000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Roberto",
            lastName: "CARBALLES BAENA",
            shortName: "R.CARBALLES BAENA",
            ranking: 99,
            rankingDouble: 129,
            country: "ESP",
            sex: "M",
            playerCardUrl: "/en-us/players/26219-r.carballes baena",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/4f743d97e622438dcbf33ddeb027e5bde023a277_carballes-baena.png?auto=compress,format" title="CARBALLES BAENA">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/4f743d97e622438dcbf33ddeb027e5bde023a277_carballes-baena.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Alexandre",
            lastName: "MULLER",
            shortName: "A.MULLER",
            ranking: 245,
            rankingDouble: 414,
            country: "FRA",
            sex: "M",
            playerCardUrl: "/en-us/players/32341-a.muller",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/930c5e05ea19ef95d52c70502a6cc90bb372db18_muller.png?auto=compress,format" title="MULLER">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/930c5e05ea19ef95d52c70502a6cc90bb372db18_muller.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: "Q"
      }
    },
    {
      id: "SM099",
      url: "/en-us/matches/SM099",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 12",
        durationInMinutes: 173,
        endTimestamp: 1578320561000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Filip",
            lastName: "KRAJINOVIC",
            shortName: "F.KRAJINOVIC",
            ranking: 32,
            rankingDouble: 455,
            country: "SRB",
            sex: "M",
            playerCardUrl: "/en-us/players/20557-f.krajinovic",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/f7411b9df4c7e9fcc370439bd617fabc7738ed46_filip-krajinovic.jpg?auto=compress,format" title="KRAJINOVIC">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/f7411b9df4c7e9fcc370439bd617fabc7738ed46_filip-krajinovic.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Frances",
            lastName: "TIAFOE",
            shortName: "F.TIAFOE",
            ranking: 81,
            rankingDouble: null,
            country: "USA",
            sex: "M",
            playerCardUrl: "/en-us/players/35361-f.tiafoe",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/202c824ef9720b9144154b0748450d1ee58e13ac_frances-tiafoe.jpg?auto=compress,format" title="TIAFOE">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/202c824ef9720b9144154b0748450d1ee58e13ac_frances-tiafoe.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 0,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: 32,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM100",
      url: "/en-us/matches/SM100",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court Simonne-Mathieu",
        durationInMinutes: 142,
        endTimestamp: 1578322408000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Stan",
            lastName: "WAWRINKA",
            shortName: "S.WAWRINKA",
            ranking: 17,
            rankingDouble: 249,
            country: "SUI",
            sex: "M",
            playerCardUrl: "/en-us/players/7815-s.wawrinka",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/df70b05cd3385393677e7207e1f34abb9dcad1aa_wawrincka.png?auto=compress,format" title="WAWRINKA">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/df70b05cd3385393677e7207e1f34abb9dcad1aa_wawrincka.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: 3,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: 24,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Jozef",
            lastName: "KOVALIK",
            shortName: "J.KOVALIK",
            ranking: 122,
            rankingDouble: 395,
            country: "SVK",
            sex: "M",
            playerCardUrl: "/en-us/players/21647-j.kovalik",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/ad37fa154d0cbd15ddb9c9458666be8212f5a58d_jozef-kovalik.jpg?auto=compress,format" title="KOVALIK">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/ad37fa154d0cbd15ddb9c9458666be8212f5a58d_jozef-kovalik.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 1,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: 7,
            winner: true,
            inProgress: false
          },
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM101",
      url: "/en-us/matches/SM101",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 9",
        durationInMinutes: 167,
        endTimestamp: 1578321454000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Reilly",
            lastName: "OPELKA",
            shortName: "R.OPELKA",
            ranking: 39,
            rankingDouble: 142,
            country: "USA",
            sex: "M",
            playerCardUrl: "/en-us/players/32402-r.opelka",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/6b3bc8fea82359a7fc4e6198f386c6ec2626dcf6_opelka.png?auto=compress,format" title="OPELKA">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/6b3bc8fea82359a7fc4e6198f386c6ec2626dcf6_opelka.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: 0,
            winner: false,
            inProgress: false
          },
          {
            score: 5,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: 7,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Cristian",
            lastName: "GARIN",
            shortName: "C.GARIN",
            ranking: 18,
            rankingDouble: 259,
            country: "CHI",
            sex: "M",
            playerCardUrl: "/en-us/players/26967-c.garin",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/da6f04ef83425eabd32a291b4e417510dd33fde5_garin.png?auto=compress,format" title="GARIN">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/da6f04ef83425eabd32a291b4e417510dd33fde5_garin.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 7,
            tieBreak: 7,
            winner: true,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: 9,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM102",
      url: "/en-us/matches/SM102",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 1",
        durationInMinutes: 182,
        endTimestamp: 1578310236000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Janko",
            lastName: "TIPSAREVIC",
            shortName: "J.TIPSAREVIC",
            ranking: 238,
            rankingDouble: 193,
            country: "SRB",
            sex: "M",
            playerCardUrl: "/en-us/players/5821-j.tipsarevic",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/4768f52dcce13f391d001b0c72af8a8124cafb88_tipsarevic.png?auto=compress,format" title="TIPSAREVIC">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/4768f52dcce13f391d001b0c72af8a8124cafb88_tipsarevic.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 0,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: 7,
            winner: true,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Grigor",
            lastName: "DIMITROV",
            shortName: "G.DIMITROV",
            ranking: 19,
            rankingDouble: null,
            country: "BUL",
            sex: "M",
            playerCardUrl: "/en-us/players/19689-g.dimitrov",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/aa527a4fe47229f95d9c6648641dadfe9d66edfb_grigor-dimitrov.jpg?auto=compress,format" title="DIMITROV">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/aa527a4fe47229f95d9c6648641dadfe9d66edfb_grigor-dimitrov.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: 4,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM103",
      url: "/en-us/matches/SM103",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court Suzanne-Lenglen",
        durationInMinutes: 130,
        endTimestamp: 1578309611000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Thomas",
            lastName: "FABBIANO",
            shortName: "T.FABBIANO",
            ranking: 147,
            rankingDouble: 311,
            country: "ITA",
            sex: "M",
            playerCardUrl: "/en-us/players/13555-t.fabbiano",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/2cee913578d0b9526891d03c425e47f2071165ea_fabbiano.png?auto=compress,format" title="FABBIANO">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/2cee913578d0b9526891d03c425e47f2071165ea_fabbiano.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 5,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 1,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Marin",
            lastName: "CILIC",
            shortName: "M.CILIC",
            ranking: 37,
            rankingDouble: 454,
            country: "CRO",
            sex: "M",
            playerCardUrl: "/en-us/players/11674-m.cilic",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/0665f9293e2849ff9dbf9859838b8563c4884434_marin-cilic.jpg?auto=compress,format" title="CILIC">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/0665f9293e2849ff9dbf9859838b8563c4884434_marin-cilic.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: 11,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM104",
      url: "/en-us/matches/SM104",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court Simonne-Mathieu",
        durationInMinutes: 198,
        endTimestamp: 1578310621000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Marco",
            lastName: "CECCHINATO",
            shortName: "M.CECCHINATO",
            ranking: 113,
            rankingDouble: null,
            country: "ITA",
            sex: "M",
            playerCardUrl: "/en-us/players/24584-m.cecchinato",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/6aeb2504ee71fa2a988a75045a45675fad7862b7_cecchinato.png?auto=compress,format" title="CECCHINATO">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/6aeb2504ee71fa2a988a75045a45675fad7862b7_cecchinato.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: 8,
            winner: true,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: 16,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Nicolas",
            lastName: "MAHUT",
            shortName: "N.MAHUT",
            ranking: 212,
            rankingDouble: 3,
            country: "FRA",
            sex: "M",
            playerCardUrl: "/en-us/players/4899-n.mahut",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/fb236c27e9be661e308e00376244bbed8ec55136_mahut.png?auto=compress,format" title="MAHUT">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/fb236c27e9be661e308e00376244bbed8ec55136_mahut.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: 6,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: "W"
      }
    },
    {
      id: "SM105",
      url: "/en-us/matches/SM105",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 1",
        durationInMinutes: 186,
        endTimestamp: 1578311234000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Robin",
            lastName: "HAASE",
            shortName: "R.HAASE",
            ranking: 169,
            rankingDouble: 33,
            country: "NED",
            sex: "M",
            playerCardUrl: "/en-us/players/11298-r.haase",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/5229f5264bb98d67b5561107a944cff4c262f407_robin-haase.jpg?auto=compress,format" title="HAASE">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/5229f5264bb98d67b5561107a944cff4c262f407_robin-haase.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: 7,
            winner: true,
            inProgress: false
          },
          {
            score: 1,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Philipp",
            lastName: "KOHLSCHREIBER",
            shortName: "P.KOHLSCHREIBER",
            ranking: 74,
            rankingDouble: null,
            country: "GER",
            sex: "M",
            playerCardUrl: "/en-us/players/4825-p.kohlschreiber",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/90c90bc46e2175c68d2afa49345ca58985d551ac_philipp-kohlschreiber.jpg?auto=compress,format" title="KOHLSCHREIBER">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/90c90bc46e2175c68d2afa49345ca58985d551ac_philipp-kohlschreiber.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: 5,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM106",
      url: "/en-us/matches/SM106",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 6",
        durationInMinutes: 129,
        endTimestamp: 1578311136000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Jiri",
            lastName: "VESELY",
            shortName: "J.VESELY",
            ranking: 65,
            rankingDouble: null,
            country: "CZE",
            sex: "M",
            playerCardUrl: "/en-us/players/21741-j.vesely",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/0f0c5da896ac622f281c6ee8c304eb56c3b4410c_jiri-vesely.jpg?auto=compress,format" title="VESELY">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/0f0c5da896ac622f281c6ee8c304eb56c3b4410c_jiri-vesely.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: 3,
            winner: false,
            inProgress: false
          },
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 0,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Leonardo",
            lastName: "MAYER",
            shortName: "L.MAYER",
            ranking: 118,
            rankingDouble: 97,
            country: "ARG",
            sex: "M",
            playerCardUrl: "/en-us/players/12105-l.mayer",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/dd60cd4954b7112838ad2c2a21bb9d0ed7da7fd6_mayer.png?auto=compress,format" title="MAYER">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/dd60cd4954b7112838ad2c2a21bb9d0ed7da7fd6_mayer.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 7,
            tieBreak: 7,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM107",
      url: "/en-us/matches/SM107",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 14",
        durationInMinutes: 221,
        endTimestamp: 1578311176000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Marton",
            lastName: "FUCSOVICS",
            shortName: "M.FUCSOVICS",
            ranking: 84,
            rankingDouble: 343,
            country: "HUN",
            sex: "M",
            playerCardUrl: "/en-us/players/22454-m.fucsovics",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/08e16b343d928bd5a025fdf50adbbece789e33bc_fucsovics.png?auto=compress,format" title="FUCSOVICS">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/08e16b343d928bd5a025fdf50adbbece789e33bc_fucsovics.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: 7,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Diego",
            lastName: "SCHWARTZMAN",
            shortName: "D.SCHWARTZMAN",
            ranking: 13,
            rankingDouble: 45,
            country: "ARG",
            sex: "M",
            playerCardUrl: "/en-us/players/24162-d.schwartzman",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/a5f8741903774456d1615b732143322154cd4d85_schwartzman.png?auto=compress,format" title="SCHWARTZMAN">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/a5f8741903774456d1615b732143322154cd4d85_schwartzman.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: 9,
            winner: true,
            inProgress: false
          },
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: 17,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM108",
      url: "/en-us/matches/SM108",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 7",
        durationInMinutes: 208,
        endTimestamp: 1578309981000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Matteo",
            lastName: "BERRETTINI",
            shortName: "M.BERRETTINI",
            ranking: 8,
            rankingDouble: 204,
            country: "ITA",
            sex: "M",
            playerCardUrl: "/en-us/players/29046-m.berrettini",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/1cfa5eeae4b9823889ab73f8d3fa0f0d42ecf965_berrettini.png?auto=compress,format" title="BERRETTINI">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/1cfa5eeae4b9823889ab73f8d3fa0f0d42ecf965_berrettini.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: 3,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: 29,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Pablo",
            lastName: "ANDUJAR",
            shortName: "P.ANDUJAR",
            ranking: 53,
            rankingDouble: null,
            country: "ESP",
            sex: "M",
            playerCardUrl: "/en-us/players/9592-p.andujar",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/255a8516d23f960c0df64799f7e7a2bb393cb8c7_andujar.png?auto=compress,format" title="ANDUJAR">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/255a8516d23f960c0df64799f7e7a2bb393cb8c7_andujar.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 7,
            tieBreak: 7,
            winner: true,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM109",
      url: "/en-us/matches/SM109",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 13",
        durationInMinutes: 133,
        endTimestamp: 1578309627000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Casper",
            lastName: "RUUD",
            shortName: "C.RUUD",
            ranking: 36,
            rankingDouble: 195,
            country: "NOR",
            sex: "M",
            playerCardUrl: "/en-us/players/36389-c.ruud",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/e1871eab8a0a3343385b947f65e41510cf8eb554_ruud.png?auto=compress,format" title="RUUD">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/e1871eab8a0a3343385b947f65e41510cf8eb554_ruud.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: 7,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Ernests",
            lastName: "GULBIS",
            shortName: "E.GULBIS",
            ranking: 162,
            rankingDouble: 450,
            country: "LAT",
            sex: "M",
            playerCardUrl: "/en-us/players/13650-e.gulbis",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/dd86e54e18565f4eb99fce527294b0bfa7fced36_ernests-gulbis.jpg?auto=compress,format" title="GULBIS">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/dd86e54e18565f4eb99fce527294b0bfa7fced36_ernests-gulbis.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: 2,
            winner: false,
            inProgress: false
          },
          {
            score: 0,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM110",
      url: "/en-us/matches/SM110",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 6",
        durationInMinutes: 127,
        endTimestamp: 1578310067000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Malek",
            lastName: "JAZIRI",
            shortName: "M.JAZIRI",
            ranking: 260,
            rankingDouble: 296,
            country: "TUN",
            sex: "M",
            playerCardUrl: "/en-us/players/8870-m.jaziri",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/a15350663b40375cb79d5403bfb373026b2f0d38_malek-jaziri.jpg?auto=compress,format" title="JAZIRI">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/a15350663b40375cb79d5403bfb373026b2f0d38_malek-jaziri.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 1,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 0,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Oscar",
            lastName: "OTTE",
            shortName: "O.OTTE",
            ranking: 216,
            rankingDouble: null,
            country: "GER",
            sex: "M",
            playerCardUrl: "/en-us/players/27419-o.otte",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/3e3827e8d0ab07f9130858f0f0953a02ec24cfdd_otte.png?auto=compress,format" title="OTTE">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/3e3827e8d0ab07f9130858f0f0953a02ec24cfdd_otte.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: "L"
      }
    },
    {
      id: "SM111",
      url: "/en-us/matches/SM111",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court Philippe-Chatrier",
        durationInMinutes: 101,
        endTimestamp: 1578310458000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Lorenzo",
            lastName: "SONEGO",
            shortName: "L.SONEGO",
            ranking: 46,
            rankingDouble: 459,
            country: "ITA",
            sex: "M",
            playerCardUrl: "/en-us/players/35289-l.sonego",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/26c117023c93f657c0c39fd6ef0a5ee281cd5ee1_sonego.png?auto=compress,format" title="SONEGO">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/26c117023c93f657c0c39fd6ef0a5ee281cd5ee1_sonego.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Roger",
            lastName: "FEDERER",
            shortName: "R.FEDERER",
            ranking: 4,
            rankingDouble: null,
            country: "SUI",
            sex: "M",
            playerCardUrl: "/en-us/players/2508-r.federer",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/b802c5634363b64ceb9eb3f605792e013f954f66_federer.png?auto=compress,format" title="FEDERER">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/b802c5634363b64ceb9eb3f605792e013f954f66_federer.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: 3,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM112",
      url: "/en-us/matches/SM112",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court Suzanne-Lenglen",
        durationInMinutes: 119,
        endTimestamp: 1578310281000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Kei",
            lastName: "NISHIKORI",
            shortName: "K.NISHIKORI",
            ranking: 31,
            rankingDouble: 452,
            country: "JPN",
            sex: "M",
            playerCardUrl: "/en-us/players/13059-k.nishikori",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/92b0ae6a9bf1351540969348f5a3a29787475cfe_nishikori.png?auto=compress,format" title="NISHIKORI">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/92b0ae6a9bf1351540969348f5a3a29787475cfe_nishikori.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: 7,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Quentin",
            lastName: "HALYS",
            shortName: "Q.HALYS",
            ranking: 193,
            rankingDouble: 157,
            country: "FRA",
            sex: "M",
            playerCardUrl: "/en-us/players/31036-q.halys",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/61be5f5a074409b57326f733db6b14d08ce4e14d_halys.png?auto=compress,format" title="HALYS">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/61be5f5a074409b57326f733db6b14d08ce4e14d_halys.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: "W"
      }
    },
    {
      id: "SM113",
      url: "/en-us/matches/SM113",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court Suzanne-Lenglen",
        durationInMinutes: 141,
        endTimestamp: 1578322782000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Jo-Wilfried",
            lastName: "TSONGA",
            shortName: "JW.TSONGA",
            ranking: 49,
            rankingDouble: null,
            country: "FRA",
            sex: "M",
            playerCardUrl: "/en-us/players/6291-jw.tsonga",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/ea5fbe437ece47cb89e124296db73b5fc45c8d20_jo-wilfried-tsonga.jpg?auto=compress,format" title="TSONGA">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/ea5fbe437ece47cb89e124296db73b5fc45c8d20_jo-wilfried-tsonga.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 7,
            tieBreak: 7,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Peter",
            lastName: "GOJOWCZYK",
            shortName: "P.GOJOWCZYK",
            ranking: 125,
            rankingDouble: null,
            country: "GER",
            sex: "M",
            playerCardUrl: "/en-us/players/15722-p.gojowczyk",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/6e73bad3169095582c77fa6ea304fe98b8fb5335_peter-gojowczyk.jpg?auto=compress,format" title="GOJOWCZYK">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/6e73bad3169095582c77fa6ea304fe98b8fb5335_peter-gojowczyk.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: 4,
            winner: false,
            inProgress: false
          },
          {
            score: 1,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM114",
      url: "/en-us/matches/SM114",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 14",
        durationInMinutes: 172,
        endTimestamp: 1578309793000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Alexei",
            lastName: "POPYRIN",
            shortName: "A.POPYRIN",
            ranking: 103,
            rankingDouble: null,
            country: "AUS",
            sex: "M",
            playerCardUrl: "/en-us/players/36373-a.popyrin",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/ec1aab581b61df27ffb0b1aa7b263562d34c1284_popyrin.png?auto=compress,format" title="POPYRIN">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/ec1aab581b61df27ffb0b1aa7b263562d34c1284_popyrin.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: 12,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: "W"
      },
      teamB: {
        players: [
          {
            firstName: "Ugo",
            lastName: "HUMBERT",
            shortName: "U.HUMBERT",
            ranking: 42,
            rankingDouble: 460,
            country: "FRA",
            sex: "M",
            playerCardUrl: "/en-us/players/36307-u.humbert",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/42776fffc7404b377d132a509273d80a0ff70b4e_humbert.png?auto=compress,format" title="HUMBERT">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/42776fffc7404b377d132a509273d80a0ff70b4e_humbert.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: 10,
            winner: false,
            inProgress: false
          },
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM115",
      url: "/en-us/matches/SM115",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 7",
        durationInMinutes: 133,
        endTimestamp: 1578311033000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Albert",
            lastName: "RAMOS-VINOLAS",
            shortName: "A.RAMOS-VINOLAS",
            ranking: 41,
            rankingDouble: 457,
            country: "ESP",
            sex: "M",
            playerCardUrl: "/en-us/players/14065-a.ramos-vinolas",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/891c725043aa11164732db093d66f9025b0171a3_albert-ramos.jpg?auto=compress,format" title="RAMOS-VINOLAS">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/891c725043aa11164732db093d66f9025b0171a3_albert-ramos.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: 2,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Laslo",
            lastName: "DJERE",
            shortName: "L.DJERE",
            ranking: 80,
            rankingDouble: null,
            country: "SRB",
            sex: "M",
            playerCardUrl: "/en-us/players/28518-l.djere",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/8f5c262d38d7019b66f3b4f708b49f89f5971b38_laslo-djere.jpg?auto=compress,format" title="DJERE">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/8f5c262d38d7019b66f3b4f708b49f89f5971b38_laslo-djere.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: 7,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: 31,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM116",
      url: "/en-us/matches/SM116",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 13",
        durationInMinutes: 102,
        endTimestamp: 1578316226000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Alex",
            lastName: "DE MINAUR",
            shortName: "A.DE MINAUR",
            ranking: 26,
            rankingDouble: 131,
            country: "AUS",
            sex: "M",
            playerCardUrl: "/en-us/players/36276-a.de minaur",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/b6a31e69577d6ec2120d900493970edab97ae3af_de-minaur.png?auto=compress,format" title="DE MINAUR">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/b6a31e69577d6ec2120d900493970edab97ae3af_de-minaur.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: 21,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Bradley",
            lastName: "KLAHN",
            shortName: "B.KLAHN",
            ranking: 126,
            rankingDouble: 276,
            country: "USA",
            sex: "M",
            playerCardUrl: "/en-us/players/17594-b.klahn",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/add2cecdf6720e508a243389c9598fc87044c32d_klhan.png?auto=compress,format" title="KLAHN">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/add2cecdf6720e508a243389c9598fc87044c32d_klhan.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 1,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM117",
      url: "/en-us/matches/SM117",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 5",
        durationInMinutes: 102,
        endTimestamp: 1578316198000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Pablo",
            lastName: "CARRENO BUSTA",
            shortName: "P.CARRENO BUSTA",
            ranking: 25,
            rankingDouble: 105,
            country: "ESP",
            sex: "M",
            playerCardUrl: "/en-us/players/21578-p.carreno busta",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/a944792c37b86f39a06111a4f5c71ab6c75b5414_pablo-carreno-busta.jpg?auto=compress,format" title="CARRENO BUSTA">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/a944792c37b86f39a06111a4f5c71ab6c75b5414_pablo-carreno-busta.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Joao",
            lastName: "SOUSA",
            shortName: "J.SOUSA",
            ranking: 66,
            rankingDouble: 65,
            country: "POR",
            sex: "M",
            playerCardUrl: "/en-us/players/16392-j.sousa",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/f52c430328de1566e7adbc6fbd396665acf95acc_joao-sousa.jpg?auto=compress,format" title="SOUSA">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/f52c430328de1566e7adbc6fbd396665acf95acc_joao-sousa.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 1,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM118",
      url: "/en-us/matches/SM118",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 14",
        durationInMinutes: 138,
        endTimestamp: 1578323171000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Benoit",
            lastName: "PAIRE",
            shortName: "B.PAIRE",
            ranking: 22,
            rankingDouble: 86,
            country: "FRA",
            sex: "M",
            playerCardUrl: "/en-us/players/20017-b.paire",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/65e3fc7d7a0d55b4ef1d06d329811f2b9af7d08c_benoit-paire.jpg?auto=compress,format" title="PAIRE">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/65e3fc7d7a0d55b4ef1d06d329811f2b9af7d08c_benoit-paire.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: 5,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Marius",
            lastName: "COPIL",
            shortName: "M.COPIL",
            ranking: 186,
            rankingDouble: 201,
            country: "ROU",
            sex: "M",
            playerCardUrl: "/en-us/players/15549-m.copil",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/916ad87f63cd15ddefeded6dbe0d679d8398c822_marius-copil.jpg?auto=compress,format" title="COPIL">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/916ad87f63cd15ddefeded6dbe0d679d8398c822_marius-copil.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: 7,
            winner: true,
            inProgress: false
          },
          {
            score: 0,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 1,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM119",
      url: "/en-us/matches/SM119",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 14",
        durationInMinutes: 234,
        endTimestamp: 1578321071000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Pierre-Hugues",
            lastName: "HERBERT",
            shortName: "PH.HERBERT",
            ranking: 71,
            rankingDouble: 19,
            country: "FRA",
            sex: "M",
            playerCardUrl: "/en-us/players/21623-ph.herbert",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/824161baf7d0290b46028ebf6e0345e8c55745c2_pierre-hugues-herbert.jpg?auto=compress,format" title="HERBERT">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/824161baf7d0290b46028ebf6e0345e8c55745c2_pierre-hugues-herbert.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Daniil",
            lastName: "MEDVEDEV",
            shortName: "D.MEDVEDEV",
            ranking: 5,
            rankingDouble: 180,
            country: "RUS",
            sex: "M",
            playerCardUrl: "/en-us/players/28836-d.medvedev",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/606291a9f2b2223ea029bd051fda1f32fb642801_medvedev.png?auto=compress,format" title="MEDVEDEV">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/606291a9f2b2223ea029bd051fda1f32fb642801_medvedev.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 5,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: 12,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM120",
      url: "/en-us/matches/SM120",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 9",
        durationInMinutes: 88,
        endTimestamp: 1578315177000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Nikoloz",
            lastName: "BASILASHVILI",
            shortName: "N.BASILASHVILI",
            ranking: 27,
            rankingDouble: 226,
            country: "GEO",
            sex: "M",
            playerCardUrl: "/en-us/players/20124-n.basilashvili",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/4d1e1184ece16c7d591a94f2cafaabe194324b91_nikoloz-basilashvili.jpg?auto=compress,format" title="BASILASHVILI">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/4d1e1184ece16c7d591a94f2cafaabe194324b91_nikoloz-basilashvili.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 1,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: 15,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Juan Ignacio",
            lastName: "LONDERO",
            shortName: "JI.LONDERO",
            ranking: 62,
            rankingDouble: 188,
            country: "ARG",
            sex: "M",
            playerCardUrl: "/en-us/players/26285-ji.londero",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/69bd58f06585155e1eee8ef2b3e26d1da206a7b9_londero.png?auto=compress,format" title="LONDERO">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/69bd58f06585155e1eee8ef2b3e26d1da206a7b9_londero.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM121",
      url: "/en-us/matches/SM121",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court Simonne-Mathieu",
        durationInMinutes: 99,
        endTimestamp: 1578320847000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Mischa",
            lastName: "ZVEREV",
            shortName: "M.ZVEREV",
            ranking: 257,
            rankingDouble: 189,
            country: "GER",
            sex: "M",
            playerCardUrl: "/en-us/players/8858-m.zverev",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/81e5e4a1072b0ea3721f6c61aba094f1f72e8d2e_mischa-zverev.jpg?auto=compress,format" title="ZVEREV">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/81e5e4a1072b0ea3721f6c61aba094f1f72e8d2e_mischa-zverev.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Richard",
            lastName: "GASQUET",
            shortName: "R.GASQUET",
            ranking: 50,
            rankingDouble: null,
            country: "FRA",
            sex: "M",
            playerCardUrl: "/en-us/players/6083-r.gasquet",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/c617f19faa9aaa5f545f38f397765fad6e58ae30_richard-gasquet.jpg?auto=compress,format" title="GASQUET">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/c617f19faa9aaa5f545f38f397765fad6e58ae30_richard-gasquet.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM122",
      url: "/en-us/matches/SM122",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 6",
        durationInMinutes: 137,
        endTimestamp: 1578318366000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Alexey",
            lastName: "VATUTIN",
            shortName: "A.VATUTIN",
            ranking: 226,
            rankingDouble: null,
            country: "RUS",
            sex: "M",
            playerCardUrl: "/en-us/players/24185-a.vatutin",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/b9671c62b150438c9bfaf2cde46f3714d678c44c_vatutin.png?auto=compress,format" title="VATUTIN">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/b9671c62b150438c9bfaf2cde46f3714d678c44c_vatutin.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: 6,
            winner: false,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: "Q"
      },
      teamB: {
        players: [
          {
            firstName: "Corentin",
            lastName: "MOUTET",
            shortName: "C.MOUTET",
            ranking: 75,
            rankingDouble: null,
            country: "FRA",
            sex: "M",
            playerCardUrl: "/en-us/players/36358-c.moutet",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/4f3e5f1147ce03955972893306140530b9d8fde2_moutet.png?auto=compress,format" title="MOUTET">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/4f3e5f1147ce03955972893306140530b9d8fde2_moutet.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: 8,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: "W"
      }
    },
    {
      id: "SM123",
      url: "/en-us/matches/SM123",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 12",
        durationInMinutes: 178,
        endTimestamp: 1578322361000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Guido",
            lastName: "ANDREOZZI",
            shortName: "G.ANDREOZZI",
            ranking: 139,
            rankingDouble: 182,
            country: "ARG",
            sex: "M",
            playerCardUrl: "/en-us/players/20074-g.andreozzi",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/155e1f491dfee9539bd0be50339fe35fdc252208_andreozzi.png?auto=compress,format" title="ANDREOZZI">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/155e1f491dfee9539bd0be50339fe35fdc252208_andreozzi.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: 2,
            winner: false,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 1,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Guido",
            lastName: "PELLA",
            shortName: "G.PELLA",
            ranking: 35,
            rankingDouble: 63,
            country: "ARG",
            sex: "M",
            playerCardUrl: "/en-us/players/16173-g.pella",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/b8c928942c986eb189b70f759e297e44da6e8889_guido-pella.jpg?auto=compress,format" title="PELLA">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/b8c928942c986eb189b70f759e297e44da6e8889_guido-pella.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 7,
            tieBreak: 7,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 1,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: 19,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM124",
      url: "/en-us/matches/SM124",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court Simonne-Mathieu",
        durationInMinutes: 84,
        endTimestamp: 1578311254000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "David",
            lastName: "GOFFIN",
            shortName: "D.GOFFIN",
            ranking: 10,
            rankingDouble: 295,
            country: "BEL",
            sex: "M",
            playerCardUrl: "/en-us/players/19706-d.goffin",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/89cc3ff898f3e660163a8a5a3e794aedd881510b_david-goffin.jpg?auto=compress,format" title="GOFFIN">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/89cc3ff898f3e660163a8a5a3e794aedd881510b_david-goffin.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: 27,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Ricardas",
            lastName: "BERANKIS",
            shortName: "R.BERANKIS",
            ranking: 72,
            rankingDouble: 298,
            country: "LTU",
            sex: "M",
            playerCardUrl: "/en-us/players/17510-r.berankis",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/466a6fdab72471f8359ff546f731be0fad978b4c_ricardas-berankis.jpg?auto=compress,format" title="BERANKIS">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/466a6fdab72471f8359ff546f731be0fad978b4c_ricardas-berankis.jpg?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 0,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM125",
      url: "/en-us/matches/SM125",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 10",
        durationInMinutes: 193,
        endTimestamp: 1578320712000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Miomir",
            lastName: "KECMANOVIC",
            shortName: "M.KECMANOVIC",
            ranking: 47,
            rankingDouble: 227,
            country: "SRB",
            sex: "M",
            playerCardUrl: "/en-us/players/38353-m.kecmanovic",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/7e600f09101f873369eaf35b72a007f99b568db8_kecmanovic.png?auto=compress,format" title="KECMANOVIC">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/7e600f09101f873369eaf35b72a007f99b568db8_kecmanovic.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: 7,
            winner: false,
            inProgress: false
          },
          {
            score: 5,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      },
      teamB: {
        players: [
          {
            firstName: "Denis",
            lastName: "KUDLA",
            shortName: "D.KUDLA",
            ranking: 111,
            rankingDouble: 263,
            country: "USA",
            sex: "M",
            playerCardUrl: "/en-us/players/19746-d.kudla",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/dd99dabec66ac310f17184874dd1aead913db37a_kudla.png?auto=compress,format" title="KUDLA">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/dd99dabec66ac310f17184874dd1aead913db37a_kudla.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 0,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: 9,
            winner: true,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 4,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    },
    {
      id: "SM126",
      url: "/en-us/matches/SM126",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court 4",
        durationInMinutes: 186,
        endTimestamp: 1578321467000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Yannick",
            lastName: "MADEN",
            shortName: "Y.MADEN",
            ranking: 149,
            rankingDouble: null,
            country: "GER",
            sex: "M",
            playerCardUrl: "/en-us/players/17608-y.maden",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/ab33d1846c1de8ad9885bd859512adfc0059a4a9_maden.png?auto=compress,format" title="MADEN">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/ab33d1846c1de8ad9885bd859512adfc0059a4a9_maden.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 7,
            tieBreak: 7,
            winner: true,
            inProgress: false
          },
          {
            score: 7,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: "Q"
      },
      teamB: {
        players: [
          {
            firstName: "Kimmer",
            lastName: "COPPEJANS",
            shortName: "K.COPPEJANS",
            ranking: 154,
            rankingDouble: 264,
            country: "BEL",
            sex: "M",
            playerCardUrl: "/en-us/players/26226-k.coppejans",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/b409584da4a404c693900d9395d742ac0a982a6d_coppejans.png?auto=compress,format" title="COPPEJANS">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/b409584da4a404c693900d9395d742ac0a982a6d_coppejans.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: 0,
            winner: false,
            inProgress: false
          },
          {
            score: 5,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: "Q"
      }
    },
    {
      id: "SM127",
      url: "/en-us/matches/SM127",
      matchData: {
        type: "SM",
        typeLabel: "Men’s Singles",
        round: 1,
        roundLabel: "First Round",
        courtName: "Court Philippe-Chatrier",
        durationInMinutes: 117,
        endTimestamp: 1578321318000,
        status: "FINISHED",
        statusLabel: "Completed"
      },
      teamA: {
        players: [
          {
            firstName: "Yannick",
            lastName: "HANFMANN",
            shortName: "Y.HANFMANN",
            ranking: 143,
            rankingDouble: null,
            country: "GER",
            sex: "M",
            playerCardUrl: "/en-us/players/22568-y.hanfmann",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/ad2c9255690956a933eda53b1ce8e366e02b8ba5_hanfmann.png?auto=compress,format" title="HANFMANN">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/ad2c9255690956a933eda53b1ce8e366e02b8ba5_hanfmann.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 2,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 1,
            tieBreak: null,
            winner: false,
            inProgress: false
          },
          {
            score: 3,
            tieBreak: null,
            winner: false,
            inProgress: false
          }
        ],
        winner: false,
        seed: null,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: "Q"
      },
      teamB: {
        players: [
          {
            firstName: "Rafael",
            lastName: "NADAL",
            shortName: "R.NADAL",
            ranking: 2,
            rankingDouble: 430,
            country: "ESP",
            sex: "M",
            playerCardUrl: "/en-us/players/7792-r.nadal",
            birth: null,
            info: null,
            imageMarkup:
              '<img src="https://images.prismic.io/fft-rg-site/498b8857e7ffb4ab2289a02a9d35b434be5b8817_nadal.png?auto=compress,format" title="NADAL">',
            imageUrl:
              "https://images.prismic.io/fft-rg-site/498b8857e7ffb4ab2289a02a9d35b434be5b8817_nadal.png?auto=compress,format"
          }
        ],
        sets: [
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          },
          {
            score: 6,
            tieBreak: null,
            winner: true,
            inProgress: false
          }
        ],
        winner: true,
        seed: 2,
        hasService: false,
        points: null,
        endCause: "",
        entryStatus: null
      }
    }
  ];

  render() {
    return (
      <Host>
        <div class="matches-container">
          <section class="matches">
            <h3 class="like-h3">{this.matches[0].matchData.roundLabel}</h3>
            {this.matches.map(matchData => (
                <tennis-match match={matchData}></tennis-match>
            ))}
          </section>
        </div>
      </Host>
    );
  }
}
