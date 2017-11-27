def mergeSort(alist):
    # print("Splitting ",alist)
    if len(alist)>1:
        mid = len(alist)//2
        lefthalf = alist[:mid]
        righthalf = alist[mid:]

        mergeSort(lefthalf)
        mergeSort(righthalf)

        # we will get this far for the first time when the halves are only length of 0 or 1
        i=0
        j=0
        k=0

        # compare the two sides and fill in the lower value in alist
        while i < len(lefthalf) and j < len(righthalf):
            if lefthalf[i] < righthalf[j]:
                alist[k]=lefthalf[i]
                i=i+1
            else:
                alist[k]=righthalf[j]
                j=j+1
            k=k+1

        # fill in the remaining values of the other half
        while i < len(lefthalf):
            alist[k]=lefthalf[i]
            i=i+1
            k=k+1

        while j < len(righthalf):
            alist[k]=righthalf[j]
            j=j+1
            k=k+1
    # print("Merging ",alist)

def checkSums(alist):
    newList = []
    if len(alist) < 3:
        print "List needs to have at least 3 elements"
        return 

    left = 0
    right = len(alist) - 1
    index = 1

    while left < right:
        leftVal = alist[left]
        rightVal = alist[right]
        indexVal = alist[index]
        print leftVal, rightVal, indexVal
        lsum = leftVal + rightVal + indexVal

        if lsum == 0:
            newList.append([leftVal, rightVal, indexVal])
            left = left + 1
            index= left + 1
            right = right - 1
        elif index >= right:
            left = left + 1
            index = left + 1
        elif lsum < 0:
            index = index + 1
        elif lsum > 0:
            index = left + 1
            right = right - 1

    return newList    

# alist = [54,26,93,17,77,31,44,55,20]
alist = [-30, -22, -10, -10, -7, -6, -5, -1, 0, 1, 2, 3, 4, 5, 6, 10, 12]
# alist = [-7, 4, 3, -10, 9, 10, 1, 2, 7, 4, 2]
print "Sorting ", alist
# first merge sort the list in O(n log(n)) time
mergeSort(alist)
print(alist)

# now look for 3sums
print "Checking for 3sums... "
print(checkSums(alist))
