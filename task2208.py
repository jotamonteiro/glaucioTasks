# Declaradas as Listas
masculino = []
feminino = []

# Receber os dados // Req. 01
for i in range(15):
    while True:
        genero = str(input("Qual seu Gênero? ")).lower().strip()

        if genero == "masculino":
            masculino.append(float(input("Digite sua altura: ")))
            break
        elif genero == "feminino":
            feminino.append(float(input("Digite sua altura: ")))
            break
        else:
            print("Gênero Invalido")

# Calculo da Media das Alturas Masculinas // Req. 02
media = sum(masculino) / len(masculino)
print(f"A media de altura das pessoas do gênero Masculino é {media}")
# Maior e Menor altura dos Grupos // Req. 03
print("A maior altura do Grupo Masculino é ", max(masculino))
print("A menor altura do Grupo Masculino é ", min(masculino))
print("A maior altura do Grupo Feminino é ", max(feminino))
print("A menor altura do Grupo Feminino é ", min(feminino))
# Numero de alturas no Grupo Feminino // Req. 04
print(f"O numero de pessoas cadastradas no Grupo Feminino é {len(feminino)}")

