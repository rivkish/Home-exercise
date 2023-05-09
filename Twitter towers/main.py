import math

def towers():
    while(True):
        ans=int(input("Enter 1 for rectangle, 2 for triangle and 3 for exit: ")) #קלט מהמשתמש
        if ans==3:      #אם נכנס 3יוצא מהתכנית
            break
        height=float(input("Enter height: "))# קליטת גובה
        width=float(input("Enter width: "))#קליטת רוחב
        if ans ==1:    #אם הוכנס 1 נבחר מלבן ולכן:
            if height==width or abs(height-width)>5: #אם הצלעות שוות-ריבוע או שהפרש הצלעות גדול מ 5
                print(height*width)  #הדפסת שטח המלבן
            else:  #אם לא
                print((height+width)*2) #הדפסת היקף המלבן
        elif ans ==2:  #אם הוכנס 2 נבחר משולש ולכן:
            ans2 =input("enter 1 for Calculate the perimeter of the triangle end 2 to print: ") #ניתן 2 אופציות למשתמש חישוב היקף או הדפסת המגדל
            if ans2=="1": #אם הוכנס 1- חישוב היקף
                print((math.sqrt(height**2+(width/2)**2))*2+width) #חישוב והדפסת היקף המשולש
            elif ans2=="2": #אם נבחר 2 -הדפסה
                width = int(width)
                height = int(height)
                if width%2==0 or width>height*2: #אם הרוחב זוגי אן שהרוחב יותר גדול מפי 2 של הגובה
                    print("Unable to print!") #הדפסה-לא ניתן להדפיס את המגדל
                else:  #אם לא-הדפסת המגדל
                    print(" "*int((width-1)/2)+"*")  #הדפסת שורה ראשונה
                    for x in range(3,width,2):  #לולאה שעוברת על כל האי זוגיים עד הרוחב
                        if x ==3:   #בפעם הראשונה:
                            for i in range(int((height-2)//((width-2)//2)+(height - 2) % ((width - 2) // 2))):  #לולאה שעוברת כמספר חלוקת הגובה במספר המספרים האי זוגיים + ההפרש אם יש
                                print(" "*int((width - x) / 2)+"*"*x) #הדפסה
                        else:  # בשאר הפעמים:
                            for i in range(int((height-2)//((width-2)//2))): #לולאה שעוברת כמספר הגובה לחלק למספר המספרים האי זוגיים
                                print(" "*int((width - x) / 2)+"*"*x) #הדפסה
                    print("*"*width) #הדפסת השורה האחרונה

    # Use a breakpoint in the code line below to debug your script.

if __name__ == '__main__':
    towers()

