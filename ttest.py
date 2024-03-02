import pandas as pd
db= pd.read_excel(r'c:\Users\ARMIDE Informatique\Desktop\Projet Académique\Projet personnel\Mémoire Abdias-Rodrigue\Base de données mémoire RETENUE.xlsx')

print(db)
#Statistique de toutes kes variables
statdb = db.drop(columns=['Annees']).describe()
print(statdb)

#Deleting one variable
led =db.pop('Recette gloable')
print(led)