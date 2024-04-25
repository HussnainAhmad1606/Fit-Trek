#include <stdio.h>
int main()
{
    int RAM[4] = {-1, -1, -1, -1};
    char userNeed[22];

    int total = 0;
    printf("Enter String: ");
    for (int i = 0; i < 22; i++)
    {
        scanf("%c", &userNeed[i]);
    }
    int pagefault = 0, pagereplacement = 0;

    int t = 0;
    int index = 0;

    while (t <22)
    {
        int boolflag = 0;
        if (t != 3)
        {
            for (int j = 0; j < 4; j++)
            {

                if (RAM[j] == -1)
                {
                    RAM[index] = (int)userNeed[t];
                    pagefault++;
                    t++;
                    index++;
                    break;
                }
            }
        }
        else
        {

            for (int j = 0; j < 4; j++)
            {
                if (RAM[j] == (int)userNeed[t])
                {
                    boolflag = 1;
                    t++;
                    break;
                }
            }
            if (boolflag != 1)
            {
                RAM[index] = userNeed[t];
                t++;
                pagereplacement++;
                pagefault++;
            }
        }

        printf("%d\t%d\t%d\n", RAM[0], RAM[1], RAM[2], RAM[3]);
    }
}