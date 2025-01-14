/*
 *  emxLibraryStructureTreeBase.java
 *
 * Copyright (c) 1992-2020 Dassault Systemes.
 *
 * All Rights Reserved.
 * This program contains proprietary and trade secret information of
 * MatrixOne, Inc.  Copyright notice is precautionary only and does
 * not evidence any actual or intended publication of such program.
 *
 * static const char RCSID[] = $Id: ${CLASSNAME}.java.rca 1.8 Wed Oct 22 16:02:10 2008 przemek Experimental przemek $
 */
import matrix.db.*;
import matrix.util.*;
import java.io.*;
import java.util.*;
import java.lang.*;

import com.matrixone.apps.domain.*;
import com.matrixone.apps.common.*;
import com.matrixone.apps.domain.util.*;
import com.matrixone.apps.framework.ui.*;
import com.matrixone.apps.library.LibraryCentralConstants;
import com.matrixone.apps.common.util.*;
import com.matrixone.apps.domain.util.MqlUtil;

/**
 * The <code>emxLibraryStructureTreeBase</code> represents implementation of Retained Document Base
 *
 */
public class emxLibraryStructureTreeBase_mxJPO
{
	int iterationCount = 0;
    /**
     * Creates emxLibraryStructureTreeBase object
     *
     * @param context the eMatrix <code>Context</code> object
     * @param args holds no arguments
     * @throws Exception if the operation fails
     */
    public emxLibraryStructureTreeBase_mxJPO (Context context, String[] args)
        throws Exception
    {

    }

    /**
     * This method is executed if a specific method is not specified.
     *
     * @param context the eMatrix <code>Context</code> object
     * @param args holds no arguments
     * @return int
     * @throws Exception if the operation fails
     * @exclude
     */
    public int mxMain(Context context, String[] args)
        throws FrameworkException
    {
        if (!context.isConnected())
            throw new FrameworkException("not supported on desktop client");
        return 0;
    }

    public String getTreeLabel(Context context, String[] args) throws Exception {
    	HashMap programMap = (HashMap) JPO.unpackArgs(args);
		HashMap paramMap = (HashMap) programMap.get("paramMap");
		String strObjectId = (String) paramMap.get("objectId");
		
		DomainObject domObj = new DomainObject(strObjectId);
		StringList selectables = new StringList();
		selectables.add(LibraryCentralConstants.NAME);
		selectables.add("attribute[Title].value");
		selectables.add("attribute[Count].value");
		selectables.add("attribute[Class Usage].value");
		Map result = domObj.getInfo(context, selectables);
		
		StringBuilder returnLabel = new StringBuilder();
		String title = (String)result.get("attribute[Title].value");
		String count = (String)result.get("attribute[Count].value");
		String classUsage = (String)result.get("attribute[Class Usage].value");
		String name = (String)result.get(LibraryCentralConstants.NAME);
		
		if(null == title || title.trim().isEmpty())
			returnLabel.append(name);
		else
			returnLabel.append(title);
		
		returnLabel.append('(').append(count).append(')');
		if(iterationCount == 0 && UIUtil.isNotNullAndNotEmpty(classUsage) && classUsage.equals("Standard")){
			String msg=EnoviaResourceBundle.getProperty(context,"emxLibraryCentralStringResource",new Locale(context.getSession().getLanguage()),"emxClassification.Error.Dashboard");
			MqlUtil.mqlCommand(context, "notice $1", msg);
			iterationCount = 1;
		}
		return returnLabel.toString();
    }
    /**
     * Gets folder list for the Workspace.
     *
     * @param context the eMatrix <code>Context</code> object
     * @param args holds the following list of arguments:
     *      0 - paramMap contains objectId
     * @return Maplist of Workspace Folder names
     * @throws Exception if the operation fails
     */

    public static MapList getStructure(Context context, String[] args) throws
        Exception
    {
        try{
            ComponentsUtil.checkLicenseReserved(context,LibraryCentralConstants.LIB_LBC_PRODUCT_TRIGRAM);
        }catch(Exception e){
            return (new MapList());
        }
        HashMap programMap = (HashMap) JPO.unpackArgs(args);
        HashMap paramMap   = (HashMap)programMap.get("paramMap");
        HashMap requestMap = (HashMap)programMap.get("requestMap");
        String objectId    = (String)paramMap.get("objectId");
        DomainObject domObj = DomainObject.newInstance(context,objectId);

        StringList strSel  = new StringList();
        strSel.add(DomainConstants.SELECT_CURRENT);
        strSel.add(DomainConstants.SELECT_TYPE);

        Map objMap     = domObj.getInfo(context, strSel);

        String objType = null;
        String objState= null;
        MapList result = new MapList();
        if(objMap!=null)
        {
            objType = (String)objMap.get(DomainConstants.SELECT_TYPE);
            objState = (String)objMap.get(DomainConstants.SELECT_CURRENT);

        }

        StringList sSelects = new StringList();

        DomainObject subFolder = DomainObject.newInstance(context , objectId);
        StringList selectRelStmts  = new StringList();
        StringList selectTypeStmts = new StringList();
        selectTypeStmts.add(subFolder.SELECT_NAME);
        selectTypeStmts.add(subFolder.SELECT_ID);
        try
        {
            result= (MapList)subFolder.getRelatedObjects(context,
                                                        "Subclass",
                                                        "*",
                                                        selectTypeStmts,
                                                        selectRelStmts,
                                                        false,
                                                        true,
                                                        (short)1,
                                                        null,
                                                        null);
        } catch ( FrameworkException e){
            throw new FrameworkException(e);
        }
        
        return result;
    }
}
